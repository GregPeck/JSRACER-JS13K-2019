<!doctype html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>JSRACER</title>
		<script src="back.js"></script>
<style type="text/css">
	html, body {
		margin:0;
		height:100%;
		overflow:hidden;
		perspective:2000px;
		font-family:Arial;
		color: #FFF;
	}
	#levels {
		width: 1000%;
		padding: 0;
		transition:all 0.5s ease-out;
		height:50vh;
	}
	li {
		animation: a 8s linear infinite;
		box-shadow: 0 0 18px #FFF;
		background-color: #FFF;
		display: inline-block;
		margin: 0 1%;
		opacity:0.5;
		width: 30vw;
		vertical-align: middle;
		text-align: center;
	}
	li img {
		max-width: 100%;
		max-height: 24vw;
	}
	/*img {
		max-height:100%;
	}*/
	@keyframes a {
		0% {
		    transform: rotateX(45deg) rotateZ(0deg);
		}
		100% {
		    transform: rotateX(45deg) rotateZ(360deg);
		}
	}
	#home2, #end, #GUI, #game {
		position:absolute;
		top:0; 
		left:0; 
		width:100%; 
		height:100%
	}
	
	h1 {
		
		text-align: center;
		font-size: 6vw;
		transform: rotateX(8deg) rotateY(343deg);
		text-shadow:
  -3px -3px 0 #f00, 3px -3px 0 #0007ef, -3px 3px 0 #0043ff, 3px 3px 0 #fff, 4px 4px 0 #fff, 5px 5px 0 #fff, 6px 6px 0 #fff, 7px 7px 0 #fff;
		margin-bottom:0;
	}
	h2, h4 {
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 3vw!important;
		transform: rotateX(362deg) rotateY(0deg) skew(-12deg);
		animation: b 4s ease-in-out infinite alternate;
	}
	h2 {
		bottom: 0px;
	}
	h3 {
		text-align: center;
		font-size:24px;
		animation: b 1s ease-in-out infinite alternate;
	}
	
	
	@keyframes b {
		0% {
		    transform: rotateX(362deg) rotateY(-4deg) skew(-12deg);
		}

		100% {
		    transform:rotateX(362deg) rotateY(4deg) skew(-12deg);
		}
	}
</style>

<script id="rings-fs" type="x-shader/x-fragment">
	precision mediump float;
	precision highp int;
	
	varying float vLightWeighting;
	varying vec3 inTunnel;
	varying vec3 normal;
	
	uniform float iTime;
	void main( void ) {
		float time = iTime/1000.;
		float cosTheta = dot(abs(normal), vec3(0.,1.,0.));
		cosTheta*=cosTheta;
		cosTheta*=cosTheta;
		
		float extra = 1.;
		if (inTunnel.x>0.) {
			extra = inTunnel.x;
		}
		gl_FragColor = vec4(vec3(0.5+(cos(iTime/100.)/2.), 0.+(sin(iTime/100.)/2.), 0.5+(sin(iTime/100.)/2.)) * extra * vLightWeighting * (0.5 + cosTheta), 1.);
	}
</script>
<script id="rock-fs" type="x-shader/x-fragment">
	precision mediump float;
	precision highp int;
	
	varying vec2 vTextureCoord;
	varying float vLightWeighting;
	varying vec3 worldPosition;
	varying vec3 vPosition;
	varying vec3 inTunnel;
	varying vec3 normal;
	
	uniform vec3 lights[48];
	uniform int nbLights;
	uniform float iTime;
	uniform sampler2D uSampler;
	
	
	void main( void ) {
		float time = iTime/1000.;
		float cosTheta = dot(abs(normal), vec3(1.,0.5,1.));
		cosTheta*=cosTheta;
		vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
		float extra = 1.;
		if (inTunnel.x>0.) {
			extra = inTunnel.x;
		}
		gl_FragColor = vec4(textureColor.rgb * extra * vLightWeighting * (cosTheta / 2.), 1.);
		
		vec3 totalLight = vec3(0.,0.,0.);
		for (int i=0; i<48; i++) {
			if (i==nbLights) {break;}
			vec3 light;
			float d = distance(worldPosition, lights[i].xyz);
			light = vec3(0.5+(cos(iTime/100.)/2.), 0.+(sin(iTime/100.)/2.), 0.5+(sin(iTime/100.)/2.));
			light *= max(0., 1.-(0.4*(d)));
			totalLight += light;
		}
		gl_FragColor += vec4(totalLight/6., 1.);
	}
</script>

<!-- Sky and checkpoints -->
<script id="shader-fs" type="x-shader/x-fragment">
	precision mediump float;
	varying vec2 vTextureCoord;
	varying float vLightWeighting;
	varying vec3 worldPosition;
	varying vec3 normal;
	
	uniform sampler2D uSampler;
	uniform vec3 lights[48];
	uniform int nbLights;
	uniform int showShadows;
	uniform float iTime;
	void main(void) {
		vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t)); 
		if (showShadows>0) { //checkpoint
			float cosTheta = 0.5+abs(dot(normal, vec3(0.,0.,1.))/2.);
			gl_FragColor = vec4(textureColor.rgb * vLightWeighting * cosTheta, textureColor.a);
		} else { //sky
			gl_FragColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);
		}
	}
</script>
<script id="shader-vs" type="x-shader/x-vertex">
	attribute vec3 aVertexPosition;
	attribute vec2 aTextureCoord;
	attribute vec3 vertexsNormals;
	attribute vec3 tunnel;

	uniform mat4 uMVMatrix;
	uniform mat4 uPMatrix;
	uniform vec3 cameraPosition;	
	varying vec2 vTextureCoord;
	varying float vLightWeighting;
	varying vec3 normal;
	varying vec3 inTunnel;
	varying vec3 worldPosition;
	varying vec2 frag_uv;
	varying vec3 vPosition;
	void main(void) {
		gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.);
		normal = vertexsNormals;
		inTunnel = tunnel;
		vPosition = normalize(aVertexPosition);
		vTextureCoord = aTextureCoord*1.;
		vLightWeighting = 1.-gl_Position.z/50.;
		worldPosition = cameraPosition.xyz + aVertexPosition;
	}
</script>

</head>
	<body onload="webGLStart();" onresize="resize()">
		<div id="race">
			<canvas id="canvasMap"></canvas>
			<canvas id="textureCanvas"></canvas>
			<canvas id="game"></canvas>
			<canvas id="GUI" ></canvas>
		</div>
		<div id="home" style="height:100%"></div>
		<div id="home2">
			<h1>JS RACER</h1>
			<ul id="levels"></ul>
			<h3></h3>
			<h2>SELECT A TRACK AND PRESS SPACEBAR TO START</h2>
		</div>
		<div id="end">
			<h1>JS RACER</h1>
			<h4></h4>
			<h2>PRESS SPACEBAR TO CONTINUE</h2>
		</div>
	</body>
</html>


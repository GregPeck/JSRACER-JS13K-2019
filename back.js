function SfxrP() {
    this.set = function(a) {
        for (var b = 0; b < 24; b++) this[String.fromCharCode(97 + b)] = a[b] || 0;
        this.c < .01 && (this.c = .01);
        var c = this.b + this.c + this.e;
        if (c < .18) {
            var d = .18 / c;
            this.b *= d, this.c *= d, this.e *= d
        }
    }
}

function sy() {
    this._p = new SfxrP;
    var a, b, c, d, e, f, g, h, i, j, k, l;
    this.reset = function() {
        var a = this._p;
        d = 100 / (a.f * a.f + .001), e = 100 / (a.g * a.g + .001), f = 1 - a.h * a.h * a.h * .01, g = -a.i * a.i * a.i * 1e-6, a.a || (k = .5 - a.n / 2, l = 5e-5 * -a.o), h = 1 + a.l * a.l * (a.l > 0 ? -.9 : 10), i = 0, j = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2e4 + 32
    }, this.totalReset = function() {
        this.reset();
        var d = this._p;
        return a = d.b * d.b * 1e5, b = d.c * d.c * 1e5, c = d.e * d.e * 1e5 + 12, 3 * ((a + b + c) / 3 | 0)
    }, this.sW = function(m, n) {
        var o = this._p,
            p = 1 != o.s || o.v,
            q = o.v * o.v * .1,
            r = 1 + 3e-4 * o.w,
            s = o.s * o.s * o.s * .1,
            t = 1 + 1e-4 * o.t,
            u = 1 != o.s,
            v = o.x * o.x,
            w = o.g,
            x = o.q || o.r,
            y = o.r * o.r * o.r * .2,
            z = o.q * o.q * (o.q < 0 ? -1020 : 1020),
            A = o.p ? ((1 - o.p) * (1 - o.p) * 2e4 | 0) + 32 : 0,
            B = o.d,
            C = o.j / 2,
            D = o.k * o.k * .01,
            E = o.a,
            F = a,
            G = 1 / a,
            H = 1 / b,
            I = 1 / c,
            J = 5 / (1 + o.u * o.u * 20) * (.01 + s);
        J > .8 && (J = .8), J = 1 - J;
        for (var Q, S, U, W, Y, Z, K = !1, L = 0, M = 0, N = 0, O = 0, P = 0, R = 0, T = 0, V = 0, X = 0, $ = 0, _ = new Array(1024), aa = new Array(32), ba = _.length; ba--;) _[ba] = 0;
        for (var ba = aa.length; ba--;) aa[ba] = 2 * Math.random() - 1;
        for (var ba = 0; ba < n; ba++) {
            if (K) return ba;
            if (A && ++X >= A && (X = 0, this.reset()), j && ++i >= j && (j = 0, d *= h), f += g, d *= f, d > e && (d = e, w > 0 && (K = !0)), S = d, C > 0 && ($ += D, S *= 1 + Math.sin($) * C), S |= 0, S < 8 && (S = 8), E || (k += l, k < 0 ? k = 0 : k > .5 && (k = .5)), ++M > F) switch (M = 0, ++L) {
                case 1:
                    F = b;
                    break;
                case 2:
                    F = c
            }
            switch (L) {
                case 0:
                    N = M * G;
                    break;
                case 1:
                    N = 1 + 2 * (1 - M * H) * B;
                    break;
                case 2:
                    N = 1 - M * I;
                    break;
                case 3:
                    N = 0, K = !0
            }
            x && (z += y, U = 0 | z, U < 0 ? U = -U : U > 1023 && (U = 1023)), p && r && (q *= r, q < 1e-5 ? q = 1e-5 : q > .1 && (q = .1)), Z = 0;
            for (var ca = 8; ca--;) {
                if (T++, T >= S && (T %= S, 3 == E))
                    for (var da = aa.length; da--;) aa[da] = 2 * Math.random() - 1;
                switch (E) {
                    case 0:
                        Y = T / S < k ? .5 : -.5;
                        break;
                    case 1:
                        Y = 1 - T / S * 2;
                        break;
                    case 2:
                        W = T / S, W = 6.28318531 * (W > .5 ? W - 1 : W), Y = 1.27323954 * W + .405284735 * W * W * (W < 0 ? 1 : -1), Y = .225 * ((Y < 0 ? -1 : 1) * Y * Y - Y) + Y;
                        break;
                    case 3:
                        Y = aa[Math.abs(32 * T / S | 0)]
                }
                p && (Q = R, s *= t, s < 0 ? s = 0 : s > .1 && (s = .1), u ? (P += (Y - R) * s, P *= J) : (R = Y, P = 0), R += P, O += R - Q, O *= 1 - q, Y = O), x && (_[V % 1024] = Y, Y += _[(V - U + 1024) % 1024], V++), Z += Y
            }
            Z *= .125 * N * v, m[ba] = Z >= 1 ? 1 : Z <= -1 ? -1 : Z
        }
        return n
    }
}
var synth = new sy;
self.jsfxr = function(a) {
    self._audioContext = self._audioContext || new AudioContext;
    var b = self._audioContext;
    synth._p.set(a);
    var c = synth.totalReset(),
        d = c + 1 >> 1 << 1,
        e = b.createBuffer(1, d, b.sampleRate),
        f = e.getChannelData(0);
    2 * synth.sW(f, c);
    return e
}, self.playSound = function(n) {
    jsfxr(n);
    var o = self._audioContext,
        e = o.createBufferSource();
    var g = o.createGain();
    e.buffer = jsfxr(n), e.loop = !1;
    e.connect(g);
    g.connect(o.destination);
    e.start(o.currentTime);
    return [e.buffer, o, e, g]
};
										
glMatrixArrayType="undefined"!=typeof Float32Array?Float32Array:"undefined"!=typeof WebGLFloatArray?WebGLFloatArray:Array;var mat3={};mat3.create=function(r){var t=new glMatrixArrayType(9);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9]),t},mat3.transpose=function(r,t){if(!t||r==t){var a=r[1],n=r[2],e=r[5];return r[1]=r[3],r[2]=r[6],r[3]=a,r[5]=r[7],r[6]=n,r[7]=e,r}return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],t};var mat4={};mat4.create=function(r){var t=new glMatrixArrayType(16);return r&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t},mat4.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},mat4.toInverseMat3=function(r,t){var a=r[0],n=r[1],e=r[2],u=r[4],i=r[5],o=r[6],f=r[8],m=r[9],c=r[10],v=c*i-o*m,y=-c*u+o*f,l=m*u-i*f,s=a*v+n*y+e*l;return s?(s=1/s,t||(t=mat3.create()),t[0]=v*s,t[1]=(-c*n+e*m)*s,t[2]=(o*n-e*i)*s,t[3]=y*s,t[4]=(c*a-e*f)*s,t[5]=(-o*a+e*u)*s,t[6]=l*s,t[7]=(-m*a+n*f)*s,t[8]=(i*a-n*u)*s,t):null},mat4.translate=function(r,t,a){var n=t[0],e=t[1];if(t=t[2],!a||r==a)return r[12]=r[0]*n+r[4]*e+r[8]*t+r[12],r[13]=r[1]*n+r[5]*e+r[9]*t+r[13],r[14]=r[2]*n+r[6]*e+r[10]*t+r[14],r[15]=r[3]*n+r[7]*e+r[11]*t+r[15],r;var u=r[0],i=r[1],o=r[2],f=r[3],m=r[4],c=r[5],v=r[6],y=r[7],l=r[8],s=r[9],M=r[10],p=r[11];return a[0]=u,a[1]=i,a[2]=o,a[3]=f,a[4]=m,a[5]=c,a[6]=v,a[7]=y,a[8]=l,a[9]=s,a[10]=M,a[11]=p,a[12]=u*n+m*e+l*t+r[12],a[13]=i*n+c*e+s*t+r[13],a[14]=o*n+v*e+M*t+r[14],a[15]=f*n+y*e+p*t+r[15],a},mat4.rotate=function(r,t,a,n){var e=a[0],u=a[1];a=a[2];var i=Math.sqrt(e*e+u*u+a*a);if(!i)return null;1!=i&&(e*=i=1/i,u*=i,a*=i);var o=Math.sin(t),f=Math.cos(t),m=1-f;t=r[0],i=r[1];var c=r[2],v=r[3],y=r[4],l=r[5],s=r[6],M=r[7],p=r[8],A=r[9],d=r[10],h=r[11],F=e*e*m+f,g=u*e*m+a*o,x=a*e*m-u*o,T=e*u*m-a*o,b=u*u*m+f,w=a*u*m+e*o,G=e*a*m+u*o;return e=u*a*m-e*o,u=a*a*m+f,n?r!=n&&(n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]):n=r,n[0]=t*F+y*g+p*x,n[1]=i*F+l*g+A*x,n[2]=c*F+s*g+d*x,n[3]=v*F+M*g+h*x,n[4]=t*T+y*b+p*w,n[5]=i*T+l*b+A*w,n[6]=c*T+s*b+d*w,n[7]=v*T+M*b+h*w,n[8]=t*G+y*e+p*u,n[9]=i*G+l*e+A*u,n[10]=c*G+s*e+d*u,n[11]=v*G+M*e+h*u,n},mat4.frustum=function(r,t,a,n,e,u,i){i||(i=mat4.create());var o=t-r,f=n-a,m=u-e;return i[0]=2*e/o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*e/f,i[6]=0,i[7]=0,i[8]=(t+r)/o,i[9]=(n+a)/f,i[10]=-(u+e)/m,i[11]=-1,i[12]=0,i[13]=0,i[14]=-u*e*2/m,i[15]=0,i},mat4.perspective=function(r,t,a,n,e){return r=a*Math.tan(r*Math.PI/360),t*=r,mat4.frustum(-t,t,-r,r,a,n,e)};


/*
███████╗██╗  ██╗ █████╗ ██████╗ ███████╗██████╗ ███████╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
███████╗███████║███████║██║  ██║█████╗  ██████╔╝███████╗
╚════██║██╔══██║██╔══██║██║  ██║██╔══╝  ██╔══██╗╚════██║
███████║██║  ██║██║  ██║██████╔╝███████╗██║  ██║███████║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
*/
mvMatrix = mat4.create();
pMatrix = mat4.create();
                                                 
function setMatrixUniforms(shader) {
	gl.uniformMatrix4fv(shader.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shader.mvMatrixUniform, false, mvMatrix);
}

function getShader(gl, id) {
	var shaderScript = self[id];
	var shader = gl.createShader(shaderScript.type == "x-shader/x-fragment" ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER);
	gl.shaderSource(shader,  shaderScript.textContent);
	gl.compileShader(shader);
	return shader;
}

function initShaders() {
	var shaders = [["shaderProgram", "shader-fs"],["shaderRock", "rock-fs"], ["shaderRings", "rings-fs"]];
	shaders.forEach(function(sh) {
		s = gl.createProgram();
		gl.attachShader(s, getShader(gl, "shader-vs"));
		gl.attachShader(s, getShader(gl, sh[1]));
		gl.linkProgram(s);

		/*if (!gl.getProgramParameter(s, gl.LINK_STATUS)) {
			alert("Could not initialise shaders\n"+gl.getProgramInfoLog(s));
		}*/

		gl.useProgram(s);

		s.vertexPositionAttribute = gl.getAttribLocation(s, "aVertexPosition");
		gl.enableVertexAttribArray(s.vertexPositionAttribute);
		
		s.textureCoordAttribute = gl.getAttribLocation(s, "aTextureCoord");
		gl.enableVertexAttribArray(s.textureCoordAttribute);
		
		s.vertexsNormals = gl.getAttribLocation(s, "vertexsNormals");
		gl.enableVertexAttribArray(s.vertexsNormals);
		
		s.tunnel = gl.getAttribLocation(s, "tunnel");
		gl.enableVertexAttribArray(s.tunnel);
		
		s.iTime = gl.getUniformLocation(s, "iTime");
		//s.resolution = gl.getUniformLocation(s, "resolution");
		s.pMatrixUniform = gl.getUniformLocation(s, "uPMatrix");
		s.mvMatrixUniform = gl.getUniformLocation(s, "uMVMatrix");
		s.samplerUniform = gl.getUniformLocation(s, "uSampler");
		s.cameraPosition = gl.getUniformLocation(s, "cameraPosition");
		s.lights = gl.getUniformLocation(s, "lights");
		s.nbLights = gl.getUniformLocation(s, "nbLights");
		s.showShadows = gl.getUniformLocation(s, "showShadows");
		self[sh[0]] = s;
	});
		
	cubeVertexIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	var cubeVertexIndices = [
	   0, 1, 2, 0, 2, 3
	];
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cubeVertexIndexBuffer.itemSize = 1;
	cubeVertexIndexBuffer.numItems = 6;
}


/*
 ██████╗ ███████╗ ██████╗ ███╗   ███╗███████╗████████╗██████╗ ██╗   ██╗
██╔════╝ ██╔════╝██╔═══██╗████╗ ████║██╔════╝╚══██╔══╝██╔══██╗╚██╗ ██╔╝
██║  ███╗█████╗  ██║   ██║██╔████╔██║█████╗     ██║   ██████╔╝ ╚████╔╝ 
██║   ██║██╔══╝  ██║   ██║██║╚██╔╝██║██╔══╝     ██║   ██╔══██╗  ╚██╔╝  
╚██████╔╝███████╗╚██████╔╝██║ ╚═╝ ██║███████╗   ██║   ██║  ██║   ██║   
 ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   
  */                                                                     
createPlaneBufferGeometry = function(w, h, dW, dH, uvMax) {
	var points = [];
	var UV = [];
	var indices = [];
	var tunnel = [];
	for (x=0; x<=w; x+=w/dW) {
		for (y=0; y<=h; y+=h/dH) {
			points.push(0, x, y);
			tunnel.push(0,0,0);
			u = uvMax ? x/w : x;
			v = uvMax ? y/h : y;
			UV.push(-u,-v);
		}
	}
	first = -1;
	for (var i=0; i<dW*dH; i++) {
		if (i%dH==0) {
			first++;
		}
		indices.push(first, first+dH+1, first+dH+2);
		indices.push(first, first+dH+2, first+1);
		first++;
	}
	return {points:points, UV:UV, indices:indices, tunnel:tunnel, rotation:{x:0,y:0,z:0}};
}
computeVertexNormals = function(geometry) {
	//Maintenant que la geometry est calculée, il faut calculer toutes les normales de chaque faces/points
	function Vector3( x, y, z ) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}
	
	Object.assign( Vector3.prototype, {
		subVectors: function ( a, b ) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			return this;
		},
		cross: function (b) {
			a = this;
			var ax = a.x, ay = a.y, az = a.z;
			var bx = b.x, by = b.y, bz = b.z;
			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;
			return this;
		},
		add: function (v) {
			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
			return this;
		},
		normalize:function() {
			var scalar = 1/Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;
			return this;
		}
	});
	
	var faces = geometry.indices;
	var points = geometry.points;
	var vertices = new Array(points.length/3 );
	for ( v = 0; v < points.length/3; v ++ ) {
		vertices[v] = new Vector3();
	}
	var cb = new Vector3();
	var ab = new Vector3();
	for (var f = 0; f<faces.length; f+=3 ) {
		var pt1 = faces[f];
		var pt2 = faces[f+1];
		var pt3 = faces[f+2];

		vA = new Vector3(points[pt1*3], points[(pt1*3)+1], points[(pt1*3)+2]);
		vB = new Vector3(points[pt2*3], points[(pt2*3)+1], points[(pt2*3)+2]);
		vC = new Vector3(points[pt3*3], points[(pt3*3)+1], points[(pt3*3)+2]);

		cb.subVectors( vC, vB );
		ab.subVectors( vA, vB );
		cb.cross(ab);

		vertices[pt1].add( cb );
		vertices[pt2].add( cb );
		vertices[pt3].add( cb );
	}
	geometry.vertexsNormals = [];
	for (var i=0; i<vertices.length; i++) {	
		vertices[i].normalize();
		geometry.vertexsNormals.push(vertices[i].x);
		geometry.vertexsNormals.push(vertices[i].y);
		geometry.vertexsNormals.push(vertices[i].z);
	}
	
}

/*
████████╗███████╗██╗  ██╗████████╗██╗   ██╗██████╗ ███████╗███████╗
╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝██╔════╝
   ██║   █████╗   ╚███╔╝    ██║   ██║   ██║██████╔╝█████╗  ███████╗
   ██║   ██╔══╝   ██╔██╗    ██║   ██║   ██║██╔══██╗██╔══╝  ╚════██║
   ██║   ███████╗██╔╝ ██╗   ██║   ╚██████╔╝██║  ██║███████╗███████║
   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
  */                                                                 
function handleLoadedTexture(texture) {
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	gl.generateMipmap(gl.TEXTURE_2D);
}
function handleLoadedTextureFromCanvas(name, textureCanvas) {
	texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.generateMipmap(gl.TEXTURE_2D);
	gl.bindTexture(gl.TEXTURE_2D, null);
	
	texture._img = new Image();
	texture._img.src = textureCanvas.toDataURL();
	self[name] = texture;
}
function initTexture() {
	sol = gl.createTexture();
	sol.image = new Image();
	sol.image.onload = function () { handleLoadedTexture(sol) }
	sol.image.src = "boue.png";
}

/*
███╗   ███╗██╗███████╗ ██████╗
████╗ ████║██║██╔════╝██╔════╝
██╔████╔██║██║███████╗██║     
██║╚██╔╝██║██║╚════██║██║     
██║ ╚═╝ ██║██║███████║╚██████╗
╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝
*/                              
function degToRad(d) {
	return d * Math.PI / 180;
}
function radToDeg(d) {
	return d * (180/Math.PI);
}

function getQuadraticXY(t, o) {
	return {
		x: (1-t) * (1-t) * o[0] + 2 * (1-t) * t * o[2] + t * t * o[4],
		y: (1-t) * (1-t) * o[1] + 2 * (1-t) * t * o[3] + t * t * o[5]
	};
}
/*
function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
	return {
		x: (1-t) * (1-t) * sx + 2 * (1-t) * t * cp1x + t * t * ex,
		y: (1-t) * (1-t) * sy + 2 * (1-t) * t * cp1y + t * t * ey
	};
}*/
function getQuadraticAngle(t, o) {
	return -Math.atan2(2*(1-t)*(o[2]-o[0]) + 2*t*(o[4]-o[2]), 2*(1-t)*(o[3]-o[1]) + 2*t*(o[5]-o[3])) + 0.5*Math.PI;
}
/*
function getQuadraticAngle(t, sx, sy, cp1x, cp1y, ex, ey) {
	var dx = 2*(1-t)*(cp1x-sx) + 2*t*(ex-cp1x);
	var dy = 2*(1-t)*(cp1y-sy) + 2*t*(ey-cp1y);
	return -Math.atan2(dx, dy) + 0.5*Math.PI;
}*/

function getQuadraticLength(sx, sy, cp1x, cp1y, cp2x, cp2y) {
	if (sx==cp1x && sy==cp1y) {
		return sy-cp2y;
	}
	var ax = sx - 2 * cp1x + cp2x;
	var ay = sy - 2 * cp1y + cp2y;
	var bx = 2 * cp1x - 2 * sx;
	var by = 2 * cp1y - 2 * sy;
	var A = 4 * (ax * ax + ay * ay);
	var B = 4 * (ax * bx + ay * by);
	var C = bx * bx + by * by;

	var Sabc = 2 * Math.sqrt(A+B+C);
	var A_2 = Math.sqrt(A);
	var A_32 = 2 * A * A_2;
	var C_2 = 2 * Math.sqrt(C);
	var BA = B / A_2;

	return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
}
/**
 * Creates a pseudo-random value generator. The seed must be an integer.
 *
 * Uses an optimized version of the Park-Miller PRNG.
 * http://www.firstpr.com.au/dsp/rand31/
 */
function Random(seed) {
	this._seed = seed % 2147483647;
	if (this._seed <= 0) this._seed += 2147483646;
}

/**
 * Returns a pseudo-random value between 1 and 2^32 - 2.
 */
Random.prototype.next = function () {
	return this._seed = this._seed * 16807 % 2147483647;
};

/**
 * Returns a pseudo-random floating point number in range [0, 1).
 */
Random.prototype.nextFloat = function () {
	// We know that result of next() will be 1 to 2147483646 (inclusive).
	return (this.next() - 1) / 2147483646;
};

/*
██╗███╗   ██╗████████╗███████╗██████╗ ███████╗ █████╗  ██████╗███████╗
██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝
██║██╔██╗ ██║   ██║   █████╗  ██████╔╝█████╗  ███████║██║     █████╗  
██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██╔══╝  ██╔══██║██║     ██╔══╝  
██║██║ ╚████║   ██║   ███████╗██║  ██║██║     ██║  ██║╚██████╗███████╗
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝
 */                                                                     
function resize() {
	gl = game.getContext("webgl");
	game.width = gl.viewportWidth =  GUI.width = self.innerWidth;
	game.height = gl.viewportHeight = GUI.height = self.innerHeight;
}

document.onkeydown = function(e) {
	switch(e.keyCode) {
		case 90:
		case 87:
		case 38: // up
			moveF = true;
			break;
		case 81:
		case 37: // left
			moveL = true; 
			break;
		case 40: // down
		case 83:
		case 65:
			moveB = true;
			break;
		case 68:
		case 39: // right
			moveR = true;
			break;
	}
}
document.onkeyup = function(e) {
	switch(e.keyCode) {
		case 90:
		case 87:
		case 38: // up
			moveF = false;
			break;
		case 81:
		case 37: // left
			if (!GameStarted) {
				nextLevel(-1);
			}
			moveL = false;
			break;
		case 40: // down
		case 83:
		case 65:
			moveB = false;
			break;
		case 68: //D
		case 39: // right
			if (!GameStarted) {
				nextLevel(1);
			}
			moveR = false;
			break;
		case 32:
			if (GameEnded) {
				showEnterGame();
			} else if (!GameStarted) {
				goLevel();
			} else if (backP==1) {
				backInProgress = true;
			}
			break;
		/*case 13:
			levels.innerHTML = "";levelInit = false; maps = [['TEST',AFAC,5,100]];showEnterGame();
			console.log("Level Number", AFAC);
			AFAC++;
			
			break;*/
	}
}
//AFAC = 1;
//5 15 49 92 109 157
//5 8 15 46 49
/*
██╗███╗   ██╗██╗████████╗
██║████╗  ██║██║╚══██╔══╝
██║██╔██╗ ██║██║   ██║   
██║██║╚██╗██║██║   ██║   
██║██║ ╚████║██║   ██║   
╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
 */
frame = 0;
moveF = moveB = moveL = moveR = false;
fov = 45;
velocityR = 0;
speed = 0;

sounds = [];
levelHome = 0;
chiffres = [];
initSound = function(name, sound, loopStart) {
	tmp = playSound(sound);
	tmp[2].stop();
	
	sounds[name] = tmp[1].createBufferSource();
	sounds[name]._dest = tmp[3];
	sounds[name]._connected = false;
	sounds[name]._play = function() { if (!this._connected) { this.connect(this._dest);this._connected=true; }}
	sounds[name]._stop = function() { if (this._connected) { this.disconnect();this._connected=false;}}
	if (name=="heart") {
		a = tmp[1].createBuffer(1, tmp[0].length*30, tmp[0].sampleRate),
		d = tmp[0].getChannelData(0);
		a.copyToChannel(d,0,0);
		a.copyToChannel(d,0,15000);
		sounds[name].buffer = a;
	} else {
		sounds[name].buffer = tmp[0];
	}
	sounds[name].loop = true;
	sounds[name].loopStart = loopStart;
	sounds[name].loopEnd = 1.0;
	sounds[name].start();
}
function webGLStart() {
	initSound("engine",[0,,0.81,,,0.18,,,,,,,,0.0002,,,,,1,,,0.1,,0.5], 0.1);
	initSound("brake",[0,,0.3213,,0.1078,0.3735,,0.207,,0.2345,0.5592,,,0.0971,,,,,1,,,,,0.5], 0.2);
	initSound("note",[2,,0.01,0.3845,4.92,0.7389,,,,,,,,,,,,,1,,,,,0.5], 0.02);
	initSound("heart",[2,,0.0697,,0.1102,0.14,,,,,,,,0.0815,,,,,1,,,,,0.64], 0);
	//init GUI
	ctx = GUI.getContext("2d");

	//init canvas && webgl
	resize();
	
	initShaders();
	initTexture();

	gl.clearColor(0, 0, 0, 1);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	
	//Creates procedurals textures
	//textureCanvas = document.getElementById("textureCanvas");
	textureCanvas.width = textureCanvas.height = 512;
	var ctx2 = textureCanvas.getContext("2d");
	
	
	//create sky texture
	var gradient = ctx2.createLinearGradient(0, 512, 0, 0);
	gradient.addColorStop(0, "#334499");
	gradient.addColorStop(0.5, "#000");
	gradient.addColorStop(1, "#000");
	ctx2.fillStyle = gradient;
	ctx2.fillRect(0, 0, 512, 512);
	handleLoadedTextureFromCanvas("sky", textureCanvas);

	//Create checkpoint texture
	textureCanvas.width=512;
	textureCanvas.height=128;
	ctx2.fillStyle = "#AAA";
	ctx2.fillRect(0, 0, 512, 512);
	ctx2.fillStyle = "white";
	ctx2.fillRect(16, 16, 480, 96);
	
	var decal = 0;
	size = 8;
	for (var y=0; y<512; y+=size) {
		for (var x=decal; x<512; x+=size*2) {
			ctx2.fillRect(x, y, size, size);
		}
		decal = decal ? 0 : size;
	}
	
	ctx2.font = "bold italic 64px Arial";
	ctx2.fillStyle = "#f50";
	ctx2.fillText("CHECKPOINT",45,88);
	handleLoadedTextureFromCanvas("checkpoint", textureCanvas);
	
	ctx2.fillStyle = "white";
	ctx2.fillRect(0, 16, 512, 96);
	
	ctx2.fillStyle = "#f50";
	ctx2.fillText("FINISH",150,88);
	handleLoadedTextureFromCanvas("finishLine", textureCanvas);
	
	
	//
	//Création des chiffres LED
	//
	imageDataH = ctx.createImageData(20, 5);
	imageDataV = ctx.createImageData(5, 20);
	[0, 128, 255].forEach(function(r) {
		for (y=0; y<5; y++) {
			for (x=Math.abs(2-y); x<20-Math.abs(2-y); x++) {
				setPixel(x, y, r, 0, 0, imageDataH);
				setPixel(y, x, r, 0, 0, imageDataV);
			}
		}
		values = [119,36,93,109,46,107,123,37,127,111];
		for (var i=0; i<10; i++) {
			chiffres[r+""+i] = ctx.createImageData(40, 50);
			if (values[i]&1) {
				copyImageData(imageDataH, 3, 0, chiffres[r+""+i]);
			}
			if (values[i]&8) {
				copyImageData(imageDataH, 3, 21, chiffres[r+""+i]);
			}
			if (values[i]&64) {
				copyImageData(imageDataH, 3, 42, chiffres[r+""+i]);
			}
			if (values[i]&2) {
				copyImageData(imageDataV, 0, 3, chiffres[r+""+i]);
			}
			if (values[i]&4) {
				copyImageData(imageDataV, 21, 3, chiffres[r+""+i]);
			}		
			if (values[i]&16) {
				copyImageData(imageDataV, 0, 24, chiffres[r+""+i]);
			}
			if (values[i]&32) {
				copyImageData(imageDataV, 21, 24, chiffres[r+""+i]);
			}
		}
		chiffres[r+" "] = ctx.createImageData(40, 50);
		copyImageData(imageDataV, 0, 3, chiffres[r+" "]);
	});
	
	showEnterGame();
	tick();
}


maps = [
	["TRACK 1 - EASY",1,3,40], //Avec 2 gros plantages, tout juste 
	["TRACK 2 - EASY",18,6,40],
	["TRACK 3 - MEDIUM",56,7,35],
	["TRACK 4 - MEDIUM",64,8,30],
	["TRACK 5 - HARD",13,2,40],
	["TRACK 6 - EVIL",15,6,35]	
]

levelInit = false;
showEnterGame = function() {
	GameEnded = false;
	race.style.display = "none";
	home.appendChild(sky._img);
	sky._img.style.width = "100%";
	sky._img.style.height = "100%";
	
	if (!levelInit) {
		for (var i=0; i<maps.length; i++) {
			generateLevel(maps[i][1], maps[i][2])
			var a = new Image();
			a.src = canvasMap.toDataURL()
			li = document.createElement("LI");
			li.appendChild(a);
			levels.appendChild(li);
		}
		nextLevel(0);
		levelInit = true;
	}
	home2.style.display = "block";
	home.style.display = "block";
	end.style.display = "none";

}
endGame = function(lose) {
	playSound([3,,0.2624,0.5001,0.96,0.0806,,-0.092,,,,-0.4,0.7741,,,,-0.28,-0.1419,1,,,,,0.57]);
	GameStarted = false;
	GameEnded = true;
	sounds['heart']._stop();
	sounds["brake"]._stop();
	race.style.display = "none";
	
	document.querySelector("#end h4").innerHTML = lose ? "YOU LOSE, LAST CHECKPOINT : "+currentSectionNumber : "CONGRATULATIONS !";
	
	home.style.display = "block";
	end.style.display = "block";
}

nextLevel = function(i) {
	levelHome+=i;
	if (levelHome<0) {
		levelHome = maps.length-1;
	}
	levelHome = levelHome%maps.length;
	levels.style.marginLeft = 25+(-levelHome*50)+"%";
	document.querySelectorAll("#levels li").forEach(function(n, i) { n.style.opacity = i==levelHome ? 1 : .2; });
	document.querySelector("h3").innerHTML = maps[levelHome][0];
}
goLevel = function() {
	generateLevel(maps[levelHome][1], maps[levelHome][2]);
	race.style.display = "block";
	home.style.display = home2.style.display = end.style.display = "none";
	resize();
	sounds["engine"]._dest.gain.value = sounds["engine"].playbackRate.value = sounds['heart'].playbackRate.value = 1;
	sounds["engine"]._play();
	sounds['heart']._play();

	initValues();
	timeLeft = maps[levelHome][3];
	GameStarted = true;
}
initValues = function() {
	velocity = {x:0, y:0, z:0};
	camera = {rotation:{x:0, y:0, z:0},x:0, y:-65, z:0};
	vitesse = gear = rpm = currentSectionNumber = backP = frame = 0;
	//timeLeft = 30; //0.001;
	debrayage = GameStarted = geometriesCalculated = GameEnded = backInProgress = false;
	back = [];
};
initValues();




/*
██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗ 
██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗
██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝
██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
██║  ██║███████╗██║ ╚████║██████╔╝███████╗██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
*/
	
getShortestStartFrom = function(position, start, pas, lessDistance, lessDistancePercent, seek) {
	section = sections[currentSectionNumber]
	for (var i=0; i<=1000; i++) {
		positionPoint = getQuadraticXY(start+((i*pas)/1000), section);
		distancePoint = Math.hypot(positionPoint.x-position.x, positionPoint.y-position.y);
		if (distancePoint<lessDistance) {
			lessDistance = distancePoint;
			lessDistancePercent = start+((i*pas)/1000);
		} else if (distancePoint>lessDistance) {
			break;
		}
	}
	if (lessDistancePercent==1) {
		currentSectionNumber++;
		if (currentSectionNumber==sections.length) {
			currentSectionNumber = 0;
		}
		return getShortestStartFrom(position, start, pas, 9999999, 0, true);
	} else if (lessDistancePercent==0) {
		//Je veux bien faire un -- mais seulement si on vient pas de faire un ++ quand même
		if (!seek) {
			currentSectionNumber--;
			if (currentSectionNumber==-1) {
				currentSectionNumber = 0;
			} else {
				return getShortestStartFrom(position, start, pas, 9999999, 0);
			}
		}
	}

	altitude = altitudes[currentSectionNumber];
	width = widths[currentSectionNumber];
	
	altitudeAngle = getQuadraticAngle(lessDistancePercent, altitude);
	altitudeXY = getQuadraticXY(lessDistancePercent, altitude);
	var widthValue = getQuadraticXY(lessDistancePercent, width);
	widthValue = Math.max(1,widthValue.x);
	
	return [lessDistancePercent, lessDistance, altitudeXY.x, altitudeAngle, widthValue];
}


gears = [0.00120, 0.0005, 0.00025, 0.00017, 0.00012, 0.0001, 0.00004];

function tick() {
	mat4.perspective(fov, gl.viewportWidth / gl.viewportHeight, 0.001, 150, pMatrix);
	mat4.identity(mvMatrix);
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.depthMask(false);
		drawSky();
	gl.depthMask(true);

	if (!GameStarted) {
		sounds["engine"].playbackRate.value*=0.99;
		sounds["engine"]._dest.gain.value*=0.99;
		requestAnimationFrame(tick);
		return;
	}
	
	frame++;
	if (frame>180) {
		timeLeft -= 1/60;
	}
	
	if (timeLeft<=0) {
		endGame(true);
		requestAnimationFrame(tick);
		return;
	}
	if (backInProgress) {
		if (back.length==1) {
			backInProgress = false;
			backP = 0;
		}
		var last = back.pop();
		camera = last.camera;
		velocityR = last.velocityR;
		velocity = last.velocity;
		speed = last.speed;
		rpm = last.rpm;
		vitesse = last.vitesse;
		gear = last.gear;
		timeLeft = last.timeLeft;
		currentSectionNumber = last.currentSectionNumber;
		
		if (last.hideRing) {
			rings[last.hideRing].visible = true;
		}
		
	} else {
		position = {
			x:128 - (camera.x + velocity.x),
			y:camera.y + velocity.y + 512
		}
				
		oldS = currentSectionNumber;
		currentPosition = getShortestStartFrom(position, 0,1, 9999999, 0, false);
		if (altitudes[currentSectionNumber].length==2) {
			endGame();
			requestAnimationFrame(tick);
			return;
		}
		if (currentSectionNumber>oldS) { //Passage d"un checkpoint
			playSound([0,,0.0457,0.4586,0.477,0.5938,,,,,,,,,,,,,1,,,,,0.57]);
		}
		
		if (camera.rotation.x<-180) { camera.rotation.x+=360; }
		cible  = sens * (radToDeg(-currentPosition[3])-90);
		if (cible<-180) { cible+=360; }
		if (cible>180) { cible-=360; }
		
		if (cible>camera.rotation.x) {
			camera.rotation.x += (cible-camera.rotation.x)/10;
		} else {
			camera.rotation.x -= (camera.rotation.x-cible)/10;
		}
		camera.z = currentPosition[2]-127.95;
		
		angleBord = radToDeg(getQuadraticAngle(currentPosition[0], section));
		
		if (currentPosition[1]<=currentPosition[4]) { //On ne touche pas le bord de la piste
			camera.x+=(velocity.x);
			camera.y+=(velocity.y);
		} else {
			//Collision
			var myAngle = radToDeg(Math.atan2(velocity.y, -velocity.x));
			nbTest = 0;
			while (true) {
				nbTest++;
				//Change l"angle de la caméra
				nouvelAngleRad = degToRad(angleBord + angleBord - myAngle-90);
				ancienAngle = Math.atan2(velocity.y, -velocity.x);
				velocity.x = (Math.sin(nouvelAngleRad)*speed)/1.2;
				velocity.y = (Math.cos(nouvelAngleRad)*speed)/1.2;
				vitesse/=1.2;
				position = {
					x:128 - (camera.x + velocity.x),
					y:camera.y + velocity.y + 512
				}

				currentPosition2 = getShortestStartFrom(position, 0,1, 9999999, 0, false);
				if (currentPosition2[1]>currentPosition[4]) { //Ca y est un angle est trouvé où ne touchera aucun mur
					angleBord+= nouvelAngleRad-ancienAngle<0 ? 10 : -10;
				} else {
					break;
				}
				if (nbTest==36) {
					break;
				}
			}
			playSound([3,,0.2469,0.7464,0.0704,0.0242,,-0.0179,,,,-0.1426,0.7292,,,,-0.006,-0.2524,1,,,,,0.5]); //Explostion
		}

		if (debrayage) {
			rpm-=200;
			if (rpm<=debrayage) {
				rpm = debrayage;
				debrayage = false;
			}
		}
		
		var braking = false;
		facteurPente = 1-((((currentPosition[3]+Math.PI)%Math.PI)-Math.PI/2)*2); 
		if (sens<0) {
			facteurPente = 2-facteurPente;
		}
		
		if ( moveF && frame>180) {
			if (!debrayage) {
				vitesse-=gears[gear]*facteurPente;
			}
		} else if ( moveB  && frame>180) {
			vitesse+=gears[gear];
			if (vitesse<0) { //C'est que l'on frène, du coup je pile un peu
				vitesse+=0.001;
				braking = true;
			}
		} else {
			vitesse*=0.995;
		}
		//Simule le rupteur en marche arrière
		if (vitesse>0.1) {
			vitesse = 0.09;
		}
		
		
		if (!debrayage) {
			rpm = (gears[gear]*-vitesse)*100000000;
		}
		
		if (rpm>=6000) {
			if (gear==6) {
				vitesse+=gears[gear];
			} else {
				gear++;
				debrayage = (gears[gear]*-vitesse)*100000000;
			}
		} else if (rpm<=2500) {
			if (gear!=0) {
				gear--;
			}
		}
		
		if (braking) {
			sounds["brake"]._play();
		} else {
			sounds["brake"]._stop();
		}
		
		//Vélocité de rotation
		if ( moveL ) {
			velocityR-=0.1;
		} else if ( moveR ) {
			velocityR+=0.1;
		} else {
			velocityR *= 0.90;	
		}
		
		velocityR = Math.min(velocityR, 1);
		velocityR = Math.max(velocityR, -1);
		
		camera.rotation.z += velocityR * 4 - (camera.rotation.z * 0.1) //Vitesse de rotation (qui penche)
		camera.rotation.y += velocityR * (1.5 - speed*2); //Vitesse de rotation réelle
		
		velocity.x *= 0.9;
		velocity.y *= 0.9;
		velocity.z *= 0.9;
		
		velocity.y += Math.cos(degToRad(camera.rotation.y)) * vitesse * 0.1;
		velocity.x += Math.sin(degToRad(camera.rotation.y)) * vitesse * 0.1;
		velocity.z += Math.sin(degToRad(camera.rotation.z)) * vitesse * 0.1;
		
		speed = (Math.hypot(velocity.x, velocity.y));
		if (frame>180) {
			back.push({
				camera:{x:camera.x, y:camera.y, z:camera.z, rotation:{x:camera.rotation.x, y:camera.rotation.y, z:camera.rotation.z}},
				velocity:{x:velocity.x, y:velocity.y, z:velocity.z},
				velocityR:velocityR, 
				speed:speed, 
				rpm:rpm, 
				vitesse:vitesse, 
				gear:gear,
				timeLeft:timeLeft,
				currentSectionNumber:currentSectionNumber
			});
			backP+=0.001;
			if (backP>1) { backP = 1; }
			if (back.length>200) {
				back.shift();
			}
		}
	}
	
	
	// Rings
	
	for (var i=0; i<rings.length; i++) {
		if (rings[i].visible) {
			//test la collision
			if (i==currentSectionNumber && !backInProgress) {
				if (Math.hypot(-rings[i].x - camera.x, -rings[i].y - camera.y) < 0.75) {
					//Collision avec un ring
					rings[i].visible = false;
					back[back.length-1].hideRing=i;
					playSound([0,,0.0201,,0.3213,0.4204,,0.3154,,,,,,0.5324,,0.5125,,,1,,,,,0.5]);
					timeLeft+=2;
				}
			}
		}
	}
	
	if (rpm<400) { //Son de moteur qui ne tourne pas rond, mieux pour les oreilles
		rpm += Math.random()*100;
	}
	
	sounds["engine"].playbackRate.value = 0.5+(Math.abs(rpm)/3000);
	
	drawScene();
	drawGUI();
	requestAnimationFrame(tick);
	
	if (frame%Math.round(timeLeft*10)==0) { //Battement du coeur en fonction du timeLeft
		sounds['heart'].playbackRate.value = timeLeft>10 ? 1 : 1 + (10-timeLeft)/10;
	}
	
}
var geometryGround;
var geometryRings;
var checkpoints = [];
var rings = [];
var sens = 1;

function createGeometries() {
	[0,1].forEach(function(pathNumber) {		
		geometries[pathNumber] = createPlaneBufferGeometry(sols.length, 4, sols.length, 4);

		geometryGround = createPlaneBufferGeometry(sols.length, 4, sols.length, 4);
		geometryGround.shader = shaderRock;
		computeVertexNormals(geometryGround);

		//D'abord, on "pli" le plane sur le chemin
		for (var index=0; index<=sols.length; index++) {
			id = index==sols.length ? index-1 : index;
			
			x = sols[id].x-128;
			y = 512-sols[id].y;
			z = sols[id].z;
			yGround = sols[id].y-512;
			angle = sols[id].angle;
			length = sols[id].length;
			tunnel = sols[id].tunnel ? 0.5 : 1.0;
			
			
			xWall= x + Math.cos(angle)*(length* (pathNumber==0 ? -1 : 1));
			yWall= y - Math.sin(angle)*(length* (pathNumber==0 ? -1 : 1));
			for (var i=0; i<5; i++) {
				o = (id*15)+(i*3);
				geometries[pathNumber].points.splice(o,3,xWall,yWall,geometries[pathNumber].points[o+2] + z);

				xOK = x+(Math.cos(angle)*((length/2)*(i-2)));
				yOK = yGround+(Math.sin(angle)*((length/2)*(i-2)));

				geometryGround.points.splice(o,3,xOK, -yOK, z);
				geometryGround.UV.splice(o/3*2,2,xOK,yOK);

				geometryGround.tunnel[o+0] = tunnel;

			}
		}
		//Ensuite on calcules les normals pour mettre un seed le long
		computeVertexNormals(geometryGround);
		computeVertexNormals(geometries[pathNumber]);

		//Ensuite on applique une déformation le long de la normale
		for (var index=0; index<=sols.length; index++) {
			for (var i=1; i<5; i++) {
				id = index==sols.length ? index-1 : index;
				seed = seeds[id][i];
				length = sols[id].length;
				tunnel = sols[id].tunnel ? 0.5 : 1;
				normalX = geometries[pathNumber].vertexsNormals[(id*15)+(i*3)+0];
				normalY = geometries[pathNumber].vertexsNormals[(id*15)+(i*3)+1];

				var seedZ = 0;
				if (i==4) { //Pour faire pencher le haut du mur vers l'extérieur
					seed = Math.max(Math.abs(seed), 0.10);
					seed*=-10;

					if (tunnel<0.99) {
						seed = length*1.2;
						j = 2*(index*5 + i);
						geometries[pathNumber].UV[j+1]*=length/2;
					}
					seedZ = -0.25;
				} else {
					seed=-Math.abs(seed)-0.2;
				}
				
				geometries[pathNumber].tunnel[(id*15)+(0*3)+0] = tunnel;
				geometries[pathNumber].tunnel[(id*15)+(i*3)+0] = tunnel;

				if (pathNumber==1) seed = -seed;
				
				geometries[pathNumber].points[(id*15)+(i*3)+0] += seed*normalX;
				geometries[pathNumber].points[(id*15)+(i*3)+1] += seed*normalY;
				geometries[pathNumber].points[(id*15)+(i*3)+2] += seedZ;
			}
		}
		//Puis on compute les normals pour que la lumière corresponde à la forme
		computeVertexNormals(geometries[pathNumber]);
		geometries[pathNumber].shader = shaderRock;
		
		//finishLine
		if (pathNumber==1) {
			geometryFinish = createPlaneBufferGeometry(1, 4, 1, 4, true);
			w = sols.length-3;
			for (var i=0; i<5; i++) {
				[0,1,2].forEach(function(d) {
					geometryFinish.points[15+(i*3)+d] = geometries[0].points[(w*15)+((d==2 ? i : 4)*3)+d];
					geometryFinish.points[(i*3)+d] = geometries[1].points[(w*15)+((d==2 ? i : 4)*3)+d];
				});
			}
			computeVertexNormals(geometryFinish);
		}

		//Création des anneaux 
		var nbFaces = 8;
		var hauteur = 6;
		geometryRings = createPlaneBufferGeometry(nbFaces, hauteur, nbFaces, hauteur);
		geometryRings.shader = shaderRings;
		for (var index=0; index<=nbFaces; index++) {
			angle = degToRad((360/nbFaces)*index);
			for (var i=0; i<=hauteur; i++) {
				angle2 = degToRad((360/hauteur)*i);
				f2 = 0.05;
				f = 0.25 + (Math.sin(angle2))*f2;

				geometryRings.points.splice((index*((hauteur+1)*3))+(i*3), 3, Math.cos(angle)*f, -(Math.cos(angle2))*f2, Math.sin(angle)*f);
			}
		}
		computeVertexNormals(geometryRings);
	});

	//Les checkpoints
	for (var sectionNumber=0; sectionNumber<sections.length; sectionNumber++) {
		section = sections[sectionNumber]
		altitude = altitudes[sectionNumber];
		width = widths[sectionNumber];
		positionStart = getQuadraticXY(0, section);
		sectionAngle = getQuadraticAngle(0, section);
		altitudeXY = getQuadraticXY(0, altitude);

		var widthValue = getQuadraticXY(0, width);
		widthValue = Math.max(1,widthValue.x);

		checkpoints[sectionNumber] = {
			x:positionStart.x-128,
			y:512-positionStart.y,
			dx:-Math.sin(sectionAngle)*widthValue,
			dy:-Math.cos(sectionAngle)*widthValue,
			z:altitudeXY.x-128+3,
			a:-sectionAngle
		}

		checkpoints[sectionNumber].geometry = createPlaneBufferGeometry(widthValue*2, 1, 1, 1, true);
		computeVertexNormals(checkpoints[sectionNumber].geometry);

		positionStart = getQuadraticXY(0.5, section);
		altitudeXY = getQuadraticXY(0.5, altitude);

		rings[sectionNumber] = {
			x:positionStart.x-128,
			y:512-positionStart.y,
			z:altitudeXY.x-128+1.35,
			visible:true
		}
	}
	geometriesCalculated = true;
}
function drawScene() {
	mat4.perspective(fov, gl.viewportWidth / gl.viewportHeight, 0.001, 150, pMatrix);
	mat4.identity(mvMatrix);
	
	
	if (!geometriesCalculated) createGeometries();
	
	//Draw rings and checkpoints
	lightsDisplayed = [];
	for (var sectionNumber=0; sectionNumber<sections.length; sectionNumber++) {
		c = checkpoints[sectionNumber];
		r = rings[sectionNumber];
		drawPlane(c.x+(c.dx*sens), c.y+(c.dy*sens), c.z, c.geometry, checkpoint, c.a+(sens>0 ? 0 : Math.PI));
		
		if (r.visible && Math.abs(currentSectionNumber - sectionNumber)<3) {
			lightsDisplayed.push(r.x,r.y,r.z);
			drawPlane(r.x, r.y, r.z, geometryRings, checkpoint);
		}
	}
	geometryRings.rotation.z+=0.05;
	
	//Draw finishline
	drawPlane(0,0,1, geometryFinish, finishLine);
	
	//Draw wall
	[0,1].forEach(function(pathNumber) {
		drawPlane(0, 0, 1, geometries[pathNumber], sol);
	});
	
	//Draw ground
	drawPlane(0, 0, 1, geometryGround, sol);
	
	//Calcule le sens 
	d = ((camera.rotation.y-90)-angleBord)%360;
	if (d<0) {d=360+d; }
	if (d>90 && d<270) {
		sens = -1;
	} else {
		sens = 1;
	}

	
}

function drawPlane(x, y, z, geometry, texture, angleY) {
	var shader = geometry.shader ? geometry.shader : shaderProgram;
	
	gl.useProgram(shader);
	gl.uniform3f(shader.cameraPosition, x, y, z);
	
	

	x+=camera.x;
	y+=camera.y;
	z+= -1.2 - camera.z;
	mat4.identity(mvMatrix);
	
	mat4.rotate(mvMatrix, degToRad(camera.rotation.z), [0, 0, 1]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.x), [1, 0, 0]);
	mat4.rotate(mvMatrix, degToRad(camera.rotation.y), [0, 1, 0]);
	mat4.rotate(mvMatrix, degToRad(-90), [1, 0, 0]);
	mat4.translate(mvMatrix, [x, y, z]);
	mat4.rotate(mvMatrix, angleY ? angleY : 0, [0, 0, 1]);
	mat4.rotate(mvMatrix, geometry.rotation.x, [1, 0, 0]);
	mat4.rotate(mvMatrix, geometry.rotation.y, [0, 1, 0]);
	mat4.rotate(mvMatrix, geometry.rotation.z, [0, 0, 1]);

	//Uniform
	if (lightsDisplayed.length) gl.uniform3fv(shader.lights, lightsDisplayed);
	gl.uniform1i(shader.nbLights, lightsDisplayed.length/3);
	gl.uniform1i(shader.showShadows, 1);
	gl.uniform1i(shader.samplerUniform, 0); //Déclare la texte 0 sur uSampler
	gl.uniform1f(shader.iTime, frame);
	setMatrixUniforms(shader);
	
	vertexs = gl.createBuffer();
	vertexs.itemSize = 3;
	vertexs.numItems = geometry.points.length;
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexs);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.points), gl.STATIC_DRAW);
	gl.vertexAttribPointer(shader.vertexPositionAttribute, vertexs.itemSize, gl.FLOAT, false, 0, 0);
	
	UV = gl.createBuffer();
	UV.itemSize = 2;
	UV.numItems = geometry.UV.length;
	gl.bindBuffer(gl.ARRAY_BUFFER, UV);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.UV), gl.STATIC_DRAW);
	gl.vertexAttribPointer(shader.textureCoordAttribute, UV.itemSize, gl.FLOAT, false, 0, 0);
	
	vertexs = gl.createBuffer();
	vertexs.itemSize = 3;
	vertexs.numItems = geometry.vertexsNormals.length;
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexs);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.vertexsNormals), gl.STATIC_DRAW);
	gl.vertexAttribPointer(shader.vertexsNormals, vertexs.itemSize, gl.FLOAT, false, 0, 0);
	
	tunnel = gl.createBuffer();
	tunnel.itemSize = 3;
	tunnel.numItems = geometry.tunnel.length;
	gl.bindBuffer(gl.ARRAY_BUFFER, tunnel);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.tunnel), gl.STATIC_DRAW);
	gl.vertexAttribPointer(shader.tunnel, tunnel.itemSize, gl.FLOAT, false, 0, 0);
		
	planeVertexIndexBuffer = gl.createBuffer();
	planeVertexIndexBuffer.itemSize = 1;
	planeVertexIndexBuffer.numItems = geometry.indices.length/8;
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, planeVertexIndexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(geometry.indices), gl.STATIC_DRAW);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture); //sol
	if (texture==sol) {
		nbCheckpointToDisplay = 3;
		if (sections.length - currentSectionNumber<=6) {
			nbCheckpointToDisplay = (sections.length - currentSectionNumber) - 2;
		}
		gl.drawElements(gl.TRIANGLES, 24*(20 * (nbCheckpointToDisplay+3)), gl.UNSIGNED_SHORT, solsIndex[currentSectionNumber-3]*48); //20 par checkpoints. Donc 40, j'affiche 2 checkpoints plus loin
	} else {
		gl.drawElements(gl.TRIANGLES, geometry.indices.length, gl.UNSIGNED_SHORT, 0);
	}
	
}
var coordBuffer, UVWBuffer;
function drawSky() {
	var shader = shaderProgram;
	gl.useProgram(shader);
	gl.uniform3f(shader.cameraPosition, 0, 0, 0);
	gl.uniform1i(shader.nbLights, 0);
	gl.uniform1i(shader.showShadows, 0);
	gl.uniform1i(shader.samplerUniform, 0);
	
	if (!UVWBuffer) {
		UVWBuffer =  gl.createBuffer();
		UVWBuffer.itemSize = 2;
		UVWBuffer.numItems = 4;
		gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,-1,1,-1,0,0,0,0]), gl.STATIC_DRAW);
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER, UVWBuffer);
	gl.vertexAttribPointer(shader.textureCoordAttribute, UVWBuffer.itemSize, gl.FLOAT, false, 0, 0);

	mat4.identity(mvMatrix);
	
	//Pour faire l'horizon, ne garder que la rotation sur Z
	mat4.rotate(mvMatrix, degToRad(camera.rotation.z), [0, 0, 1]);
	mat4.translate(mvMatrix, [0, 0, -6]);

	if (!coordBuffer) {
		coordBuffer =  gl.createBuffer();
		coordBuffer.itemSize = 3;
		coordBuffer.numItems = 12;
		gl.bindBuffer(gl.ARRAY_BUFFER, coordBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-6, -6, 1, 6, -6, 1,6, 6, 1,-6, 6, 1]), gl.STATIC_DRAW);
	}
	gl.bindBuffer(gl.ARRAY_BUFFER,coordBuffer);
	gl.vertexAttribPointer(shader.vertexPositionAttribute, coordBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	setMatrixUniforms(shader);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, sky);
	gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
}


/*
 ██████╗ ██╗   ██╗██╗
██╔════╝ ██║   ██║██║
██║  ███╗██║   ██║██║
██║   ██║██║   ██║██║
╚██████╔╝╚██████╔╝██║
 ╚═════╝  ╚═════╝ ╚═╝
*/
function drawGUI() {
	ctx.clearRect(0,0,self.innerWidth,self.innerHeight);
	
	ctx.beginPath();
	ctx.arc(GUI.width-128, GUI.height-128, 100, 0, 2 * Math.PI, false);
	ctx.strokeStyle = "#FFF";
	ctx.fillStyle = "gray";
	ctx.fill();
	
	ctx.globalCompositeOperation="source-in";
	ctx.drawImage(
		canvasMap, 
		Math.round(-minX+28-camera.x), 
		Math.round(-minY+415+camera.y),
		
		200,
		200, 
		
		GUI.width-228, 
		GUI.height-228,
		
		200, 
		200
	);
	ctx.globalCompositeOperation="source-over";
	
	ctx.beginPath();
	ctx.arc(GUI.width-128, GUI.height-128, 10, 0, 2 * Math.PI, false);
	ctx.strokeStyle = "#FFF";
	ctx.fillStyle = "black";
	ctx.fill();
	
	
	var healthWidth = self.innerWidth/4;
	if (backP==1) {
		ctx.fillStyle = "rgba(128,0,0, 1)";
	}
	ctx.fillRect(35, self.innerHeight-10-40, backP*healthWidth, 20);
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "white";
	ctx.rect(35, self.innerHeight-50, healthWidth, 20);
	ctx.stroke();
	
	
	
	/*
	 * Les feux
	 */
	if (frame<60*4) {
		colors = [frame<60 ? "black" : "green",frame<120 ? "black" : "green",frame<180 ? "black" : "green"];
		if (frame==60 || frame==120) {
			playSound([0,,0.0696,,0.57,0.35,,,,,,,,0.0815,,,,,1,,,,,0.5]);
		} else if (frame==180) {
			playSound([0,,0.0696,,0.63,0.47,,,,,,,,0.0815,,,,,1,,,,,0.5]);
		}
		for (var x=0; x<6; x++) {
			ctx.beginPath();
			ctx.arc(GUI.width/2 + (((x/3)|0) * 90) - 45, GUI.height/2 + ((x%3) * 90+(x%3==2 ? 20 : 0)) - 120, 40, 0, 2 * Math.PI, false);
			ctx.lineWidth = 2;
			ctx.fillStyle = colors[x%3];
			ctx.fill();
			ctx.stroke();
		}
	}

	drawLed(self.innerWidth/2, self.innerHeight-64, Math.round(speed*1000),0);
	
	var cent = Math.round(((timeLeft % Math.ceil(timeLeft/100)) * 100));
	if (cent==100) { cent = 0; }
	if (cent<10) { cent = "0"+cent; }
	drawLed(self.innerWidth/2,  self.innerHeight-164, (timeLeft|0) + " " + cent, timeLeft<1 ? 255 : timeLeft<3 ? 128 : 0);
}
drawLed = function(x, y, number, r) {
	var nb = number.toString();
	x-=nb.length*16;
	for (var i=0; i<nb.length; i++) {
		ctx.putImageData(chiffres[r+nb[i]], x+i*32, y);
	}
}
copyImageData = function(source, xD, yD, destination) {
	for (var x=0; x<source.width; x++) {
		for (var y=0; y<source.height; y++) {
			var offset = ((y * (source.width * 4)) + (x * 4));
			if (source.data[offset+3]!=0) {
				setPixel(xD+x, yD+y, source.data[offset],source.data[offset+1],source.data[offset+2],destination);
			}
		}
	}
}
setPixel = function(x, y, r, g, b, imageData) {
	var offset = ((Math.round(y) * (imageData.width * 4)) + (Math.round(x) * 4));
	//imageData.data.set([r, g, b, 255], offset);
	imageData.data[offset] = r;
	imageData.data[offset+1] = g;
	imageData.data[offset+2] = b;
	imageData.data[offset+3] = 255;
}


var lights = new Float32Array([]);

geometries = [];
coordsMap = [];
sols = [];
var path = [];
seeds = [];
//var imageData;
var sections = [];
var pathCoords = [];
/*
██╗     ███████╗██╗   ██╗███████╗██╗     ███████╗     ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗ 
██║     ██╔════╝██║   ██║██╔════╝██║     ██╔════╝    ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
██║     █████╗  ██║   ██║█████╗  ██║     ███████╗    ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝
██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ╚════██║    ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗
███████╗███████╗ ╚████╔╝ ███████╗███████╗███████║    ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║
╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝     ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
*/                                                                                                                                  

initLevel = function(paths, widths) {
	var XPoint = 128;
	var YPoint = 450;
	XPrevPoint = XPoint;
	YPrevPoint = YPoint;
	
	var XPointWidth = 0;
	var YPointWidth = 512;
	XPrevPointWidth = XPointWidth;
	YPrevPointWidth = YPointWidth;
	var index = 0;
	
	minX = minY = Infinity;
	maxX = maxY = -Infinity;
	
	
	for (i = 0; i < paths.length-1; i ++) {
		pathCoords[i] = [];
		
		XPoint = paths[i][0];
		YPoint = paths[i][1];
		XPointWidth = widths[i][0];
		YPointWidth = widths[i][1];
		
		id = i==paths.length-1 ? 0 : i+1;
		XNextPoint = paths[id][0];
		YNextPoint = paths[id][1];

		XNextPointWidth = widths[id][0];
		YNextPointWidth = widths[id][1];
		
		var xc = (XPoint + XNextPoint) / 2;
		var yc = (YPoint + YNextPoint) / 2;
		
		var xcWidth = (XPointWidth + XNextPointWidth) / 2;
		var ycWidth = (YPointWidth + YNextPointWidth) / 2;
		
		widths[i] = [XPrevPointWidth, YPointWidth, XPointWidth, YPointWidth, xcWidth, ycWidth];
				
		for (var t=0; t<=1; t+=0.005) {
			deb = getQuadraticXY(t, [XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc]);
			deb.angle = getQuadraticAngle(t, [XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc]);
			
			var widthValue = getQuadraticXY(t, [XPrevPointWidth, YPrevPointWidth, XPointWidth, YPointWidth, xcWidth, ycWidth]);
			deb.length = Math.max(1,widthValue.x);
			deb.sectionNumber = i;
			deb.percent = t;
			coordsMap.push(deb);
			pathCoords[i].push(deb);
			index++;
			
			if (deb.x<minX) minX = deb.x;
			if (deb.y<minY) minY = deb.y;
			if (deb.x>maxX) maxX = deb.x;
			if (deb.y>maxY) maxY = deb.y;
		}
		section = [XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc];
		section.push(getQuadraticLength(XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc));
		sections.push(section);
		
		XPrevPoint = xc;
		YPrevPoint = yc;	
		XPrevPointWidth = xcWidth;
		YPrevPointWidth = ycWidth;
	}
	minX-=100;
	minY-=100;
}


generateLevel = function(RValue, RValue2) {
	sections = [];
	sols = [];
	solsIndex = [];

	var R = new Random(RValue);
	coordsMap = [];
	decals = [[0,1]];
	oldA = Math.PI/4;
	for (var i=0; i<32; i++) { //32
		oldA+=R.nextFloat()*0.174-0.0872;
		l = 2+R.nextFloat()*6;
		x = Math.cos(oldA)*l;
		y = Math.sin(oldA)*l;

		a = radToDeg(Math.atan2(x, y));
		if (Math.hypot(x, y)<2 || Math.abs(a-oldA)>90) { i--; continue; }
		
		decals.push([x, y]);
		oldA = a;
	}
	var path = new Array(decals.length);
	
	var XPoint = 128;
	var YPoint = 450;
	for (var i=0; i<decals.length; i++) {
		path[i] = [XPoint, YPoint];
		XPoint += decals[i][0]*10;
		YPoint -= decals[i][1]*10;
	}
	path[i] = [XPoint, YPoint];
	
	//Largeur
	widths = [];
	var R3 = new Random(RValue2);
	for (var i=0;i<=decals.length; i++) {
		YPoint=512-(512/decals.length*i);
		XPoint = R3.nextFloat()*10 - 2;
		widths.push([XPoint,YPoint]);
	}
	initLevel(path, widths);
	
	//Altitudes
	altitudes = [];
	var R2 = new Random(RValue2);
	YPoint = 450;
	for (var i=0;i<sections.length; i++) {
		YPoint-=sections[i][6];
		XPoint = 128+((R2.nextFloat()-0.5)*(sections[i][6]/5));
		altitudes.push([XPoint,YPoint]);
	}
	
	var XPoint = 128;
	var YPoint = 450;
	XPrevPoint = XPoint;
	YPrevPoint = YPoint;	
	sols = [];
	var index = 0;
	var inTunnel = 0;
	for (i = 0; i < altitudes.length - 1; i ++) {
		XPoint = altitudes[i][0];
		YPoint = altitudes[i][1];

		XNextPoint = altitudes[i+1][0];
		YNextPoint = altitudes[i+1][1];

		var xc = (XPoint + XNextPoint) / 2;
		var yc = (YPoint + YNextPoint) / 2;
		
		altitudes[i] = [XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc];
		var t=0;
		for (var j=0; j<coordsMap.length/(altitudes.length); j++) {
			t+=1/(coordsMap.length / (altitudes.length));
			deb = getQuadraticXY(t, [XPrevPoint, YPrevPoint, XPoint, YPoint, xc, yc]);
			if (!coordsMap[index]) { break; }
			coordsMap[index].z = deb.x-128;
			
			x = coordsMap[index].x;
			y = coordsMap[index].y;
			z = coordsMap[index].z;
			
			angle = coordsMap[index].angle + Math.PI/2;
			length = coordsMap[index].length;
			
			if (index%10==0) { //Niveau de détail 
				//Une chance sur 100 de changer d'état
				if (R2.nextFloat()>0.99) {
					inTunnel = 1-inTunnel;
				}
				sols.push({
					x:x, 
					y:y, 
					z:z, 
					angle:angle, 
					length:length, 
					sectionNumber:coordsMap[i].sectionNumber, 
					percent:coordsMap[i].percent, 
					tunnel:inTunnel
				});
			}
			index++;
		}
		solsIndex[i] = sols.length;
		XPrevPoint = xc;
		YPrevPoint = yc;	
	}
	//ctx.putImageData(imageData, 0, 0);

	height = [];
	
	// Draw map
	canvasMap.width = maxX-minX+100;
	canvasMap.height = maxY-minY+100;
	ctxMap = canvasMap.getContext("2d");
	ctxMap.fillStyle = "white";
	ctxMap.fillRect(0,0,canvasMap.width, canvasMap.height);
	imageDataMap = ctxMap.getImageData(0,0,canvasMap.width, canvasMap.height);
	
	for (var i=2; i<coordsMap.length-1; i++) {
		x = coordsMap[i].x;
		y = coordsMap[i].y;
		z = coordsMap[i].z;

		angle = coordsMap[i].angle + Math.PI/2;
		length = coordsMap[i].length;

		for (var l=1; l<=length+1; l+=0.1) {
			if (l+0.1>=length) {
				setPixel(-minX+x+Math.cos(angle)*l, -minY+y+Math.sin(angle)*l, 40, 60, 70, imageDataMap);
				setPixel(-minX+x-Math.cos(angle)*l, -minY+y-Math.sin(angle)*l, 40, 60, 70, imageDataMap);
			} else {
				setPixel(-minX+x+Math.cos(angle)*l, -minY+y+Math.sin(angle)*l, 109, 208, 242, imageDataMap);
				setPixel(-minX+x-Math.cos(angle)*l, -minY+y-Math.sin(angle)*l, 109, 208, 242, imageDataMap);
			}
		}
	}
	ctxMap.putImageData(imageDataMap, 0, 0);
	ctxMap.filter = "blur(1px)";
	ctxMap.drawImage(canvasMap,0,0);
	sols.push({x:x, y:y, angle:angle, length:length, z:z/100});
	
	//Calcul des effects aléatoires de décalage 
	vitesseDelta = 0;
	for (var i=0; i<sols.length; i++) {
		vitesseDelta+=(Math.random()-0.5)/5;
		seeds[i] = [];
		if (vitesseDelta<-0.5) vitesseDelta = -0.45;
		for (var j=0; j<5; j++) {
			seeds[i][j] = (Math.random()/2)-0.25;
		}
	}
}
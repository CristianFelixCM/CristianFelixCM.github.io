export class Matematicas {

  static gradosARadianes(grados: number) {
    return grados * (Math.PI / 180.0);
  }

  //CAMERA

  static perspective(fovy :any, aspect : any, near : any, far: any) {
    var f = 1.0 / Math.tan(fovy / 2);
    var rangeInv = 1.0 / (near - far)
    return [
      (f / aspect), 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * rangeInv, -1,
      0, 0, 2 * far * near * rangeInv, 0
    ];

  }


  //MODEL
  
  static setPosition(matrix : any, x : any, y : any, z : any){
    matrix[12]=x;
    matrix[13]=y;
    matrix[14]=z;

    return matrix;
}

static translation(matrix : any, x : any, y : any, z : any){
    matrix[12]+=x;
    matrix[13]+=y;
    matrix[14]+=z;

    return matrix;
}

static setEscalar(matrix : any, Sx : any, Sy : any, Sz : any){
    matrix[0]=Sx;
    matrix[5]=Sy;
    matrix[10]=Sz;

    return matrix;
}

static setRotateZ(matrix : any, angulo  : any) {
    var angle = this.gradosARadianes(angulo);
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var mv0 = matrix[0], mv4 = matrix[4], mv8 = matrix[8];

    matrix[0] = c * matrix[0] - s * matrix[1];
    matrix[4] = c * matrix[4] - s * matrix[5];
    matrix[8] = c * matrix[8] - s * matrix[9];

    matrix[1]= c * matrix[1] + s * mv0;
    matrix[5]= c * matrix[5] + s * mv4;
    matrix[9]= c * matrix[9] + s * mv8;

    return matrix;
 }

 static setRotateX(matrix : any, angulo  : any) {
    var angle = this.gradosARadianes(angulo);
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var mv1 = matrix[1], mv5 = matrix[5], mv9 = matrix[9];

    matrix[1] = matrix[1] * c - matrix[2] * s;
    matrix[5] = matrix[5] * c - matrix[6] * s;
    matrix[9] = matrix[9] * c - matrix[10] * s;

    matrix[2] = matrix[2] * c + mv1 * s;
    matrix[6] = matrix[6] * c + mv5 * s;
    matrix[10] = matrix[10] * c + mv9 * s;

    return matrix;
 }

 static setRotateY(matrix : any, angulo  : any) {
    var angle = this.gradosARadianes(angulo);
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var mv0 = matrix[0], mv4 = matrix[4], mv8 = matrix[8];

    matrix[0] = c * matrix[0] + s * matrix[2];
    matrix[4] = c * matrix[4] + s * matrix[6];
    matrix[8] = c * matrix[8] + s * matrix[10];

    matrix[2] = c * matrix[2] - s * mv0;
    matrix[6] = c * matrix[6] - s * mv4;
    matrix[10] = c * matrix[10] - s * mv8;

    return matrix;
 }

















////////////////////////

static transformMat4(matrix : Float32Array, a : Float32Array, m : Float32Array) {
  let x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
    matrix[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    matrix[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    matrix[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    matrix[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return matrix;
}


static set(vector : Float32Array, x : any, y : any, z : any, w : any) {
  vector[0] = x;
  vector[1] = y;
  vector[2] = z;
  vector[3] = w;
  return vector;
}

static copyV4(vector1 : Float32Array, vector2 : Float32Array) {
  vector1[0] = vector2[0];
  vector1[1] = vector2[1];
  vector1[2] = vector2[2];
  vector1[3] = vector2[3];
  return vector1;
}


static copyV3(vector1 : Float32Array, vector2 :Float32Array ) {
  vector1[0] = vector2[0];
  vector1[1] = vector2[1];
  vector1[2] = vector2[2];
  return vector1;
}

static copyM4(m1 : any, m2 : any) {
  m1[0] = m2[0];
  m1[1] = m2[1];
  m1[2] = m2[2];
  m1[3] = m2[3];
  m1[4] = m2[4];
  m1[5] = m2[5];
  m1[6] = m2[6];
  m1[7] = m2[7];
  m1[8] = m2[8];
  m1[9] = m2[9];
  m1[10] = m2[10];
  m1[11] = m2[11];
  m1[12] = m2[12];
  m1[13] = m2[13];
  m1[14] = m2[14];
  m1[15] = m2[15];
  return m1;
}



/*
static translate(out : any, a : any, v : any) {
  let x = v[0],
    y = v[1],
    z = v[2];
  let a[0], a[1], a[2], a[3];
  let a[4], a[5], a[6], a[7];
  let a[8], a[9], a[10], a[11];

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a[0] = a[0];
    a[1] = a[1];
    a[2] = a[2];
    a[3] = a[3];
    a[4] = a[4];
    a[5] = a[5];
    a[6] = a[6];
    a[7] = a[7];
    a[8] = a[8];
    a[9] = a[9];
    a[10] = a[10];
    a[11] = a[11];

    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];

    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  }

  return out;
}
*/


static translate(matriz : Float32Array, v : Float32Array) {
    let x = v[0],
    y = v[1],
    z = v[2];
    
    let copia : number[] = [];
    this.copyM4(copia, matriz);

    matriz[12] = copia[0] * x + copia[4] * y + copia[8] * z + copia[12];
    matriz[13] = copia[1] * x + copia[5] * y + copia[9] * z + copia[13];
    matriz[14] = copia[2] * x + copia[6] * y + copia[10] * z + copia[14];
    matriz[15] = copia[3] * x + copia[7] * y + copia[11] * z + copia[15];

  return matriz;
}

static rotateY(matriz : Float32Array, rad : any) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  let copia : number[] = [];
  this.copyM4(copia, matriz);

  matriz[0] = copia[0] * c - copia[8] * s;
  matriz[1] = copia[1] * c - copia[9] * s;
  matriz[2] = copia[2] * c - copia[10] * s;
  matriz[3] = copia[3] * c - copia[11] * s;
  matriz[8] = copia[0] * s + copia[8] * c;
  matriz[9] = copia[1] * s + copia[9] * c;
  matriz[10] = copia[2] * s + copia[10] * c;
  matriz[11] = copia[3] * s + copia[11] * c;
  return matriz;
}






static rotateX(matriz : Float32Array, rad : any) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  let copia : number[] = [];
  this.copyM4(copia, matriz);

  // Perform axis-specific matrix multiplication
  matriz[4] = copia[4] * c + copia[8] * s;
  matriz[5] = copia[5] * c + copia[9] * s;
  matriz[6] = copia[6] * c + copia[10] * s;
  matriz[7] = copia[7] * c + copia[11] * s;
  matriz[8] = copia[8] * c - copia[4] * s;
  matriz[9] = copia[9] * c - copia[5] * s;
  matriz[10] = copia[10] * c - copia[6] * s;
  matriz[11] = copia[11] * c - copia[7] * s;
  return matriz;
}



static identity(matriz : Float32Array) {
  matriz[0] = 1;
  matriz[1] = 0;
  matriz[2] = 0;
  matriz[3] = 0;
  matriz[4] = 0;
  matriz[5] = 1;
  matriz[6] = 0;
  matriz[7] = 0;
  matriz[8] = 0;
  matriz[9] = 0;
  matriz[10] = 1;
  matriz[12] = 0;
  matriz[13] = 0;
  matriz[14] = 0;
  matriz[15] = 1;
  return matriz;
}



static invert(out : any, a : any) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det =
    b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}


static createM4() {
  let matrix = new Float32Array([
    0.0,  0.0,  0.0,  0.0,
    0.0,  0.0,  0.0,  0.0,
    0.0,  0.0,  0.0,  0.0,
    0.0,  0.0,  0.0,  0.0  
 ]);
 return matrix;
}


static createV3(){
  let matrix = new Float32Array([0.0,  0.0,  0.0]);
  return matrix;
}



static createV4(){
  let matrix = new Float32Array([0.0,  0.0,  0.0,  0.0]);
  return matrix;
}


static createIdentityMatrix(){
  let matrix = new Float32Array([
    1.0,  0.0,  0.0,  0.0,
    0.0,  1.0,  0.0,  0.0,
    0.0,  0.0,  1.0,  0.0,
    0.0,  0.0,  0.0,  1.0  
 ]);
 return matrix;
}


static modulo(a: any, n : any){
  return ((a % n ) + n ) % n
}



static transpose(m : any) {
  return [
    m[0],m[4],m[8],m[12],
    m[1],m[5],m[9],m[13],
    m[2],m[6],m[10],m[14],
    m[3],m[7],m[11],m[15],    
  ];
}



//RANDOM
static RandInteger(min : number, max : number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}




static distance(a : any , b : any){
  return Math.sqrt( Math.pow(b[0]-a[0],2) + Math.pow(b[1]-a[1],2) )
}








}
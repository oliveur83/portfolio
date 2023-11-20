import * as THREE from 'three';

export class logo {
  constructor(public container: HTMLElement) {}

  init() {
    // Création de la scène
    const scene = new THREE.Scene();
    // Création de la caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Création du rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.container.appendChild(renderer.domElement);
    renderer.setClearColor(0xc4e4f4, 1);
    //------------------------------------------
    //-------------------------------------
    function createCircleWithHole(
      radius: number,
      holeRadius: number,
      segments: number
    ): THREE.Shape {
      const shape = new THREE.Shape();

      const center = new THREE.Vector2(0, 0);
      const startAngle = 0;
      const endAngle = Math.PI * 2;

      // Ajouter le cercle extérieur
      shape.absarc(center.x, center.y, radius, startAngle, endAngle, false);

      // Ajouter le trou central
      const holePath = new THREE.Path();
      holePath.absarc(
        center.x,
        center.y,
        holeRadius,
        startAngle,
        endAngle,
        true
      );
      shape.holes.push(holePath);

      return shape;
    }
    function createC(
      radius: number,
      thickness: number,
      startAngle: number,
      endAngle: number
    ): THREE.Shape {
      const shape = new THREE.Shape();

      const innerRadius = radius - thickness;
      shape.moveTo(
        radius * Math.cos(startAngle),
        radius * Math.sin(startAngle)
      );
      shape.absarc(0, 0, innerRadius, startAngle, endAngle, true);
      shape.absarc(0, 0, radius, endAngle, startAngle, false);

      return shape;
    }
    function createRectangleWithHole(
      width: number,
      height: number,
      holeWidth: number,
      holeHeight: number
    ): THREE.Shape {
      const shape = new THREE.Shape();

      const halfWidth = width / 2;
      const halfHeight = height / 2;

      // Définir les coins du rectangle
      const topLeft = new THREE.Vector2(-halfWidth, halfHeight);
      const topRight = new THREE.Vector2(halfWidth, halfHeight);
      const bottomRight = new THREE.Vector2(halfWidth, -halfHeight);
      const bottomLeft = new THREE.Vector2(-halfWidth, -halfHeight);

      // Définir les points du trou central
      const holeTopLeft = new THREE.Vector2(-holeWidth / 2, holeHeight / 2);
      const holeTopRight = new THREE.Vector2(holeWidth / 2, holeHeight / 2);
      const holeBottomRight = new THREE.Vector2(holeWidth / 2, -holeHeight / 2);
      const holeBottomLeft = new THREE.Vector2(-holeWidth / 2, -holeHeight / 2);

      // Créer le rectangle
      shape.moveTo(topLeft.x, topLeft.y);
      shape.lineTo(topRight.x, topRight.y);
      shape.lineTo(bottomRight.x, bottomRight.y);
      shape.lineTo(bottomLeft.x, bottomLeft.y);
      shape.lineTo(topLeft.x, topLeft.y);

      // Créer le trou central
      const holePath = new THREE.Path();
      holePath.moveTo(holeTopLeft.x, holeTopLeft.y);
      holePath.lineTo(holeTopRight.x, holeTopRight.y);
      holePath.lineTo(holeBottomRight.x, holeBottomRight.y);
      holePath.lineTo(holeBottomLeft.x, holeBottomLeft.y);
      holePath.lineTo(holeTopLeft.x, holeTopLeft.y);

      shape.holes.push(holePath);

      return shape;
    }
    //---------------------------------------------
    //-----------------------------------------------   
    // Création du cercle avec une partie enlevée
    const radiuso = 1;
    const holeRadius = 0.5;
    const segments = 100;
    const radius=1;
    const circleShape = createCircleWithHole(radius, holeRadius, segments);
    const geometryo = new THREE.ShapeGeometry(circleShape);
    const materialo = new THREE.MeshBasicMaterial({
      color: 0x084a83,
      side: THREE.DoubleSide,
    });
    const mesho = new THREE.Mesh(geometryo, materialo);
    const mesho2 = new THREE.Mesh(geometryo, materialo);
   
    mesho.position.x = +7;
    mesho.position.y = -0.3;
    mesho2.position.x = -1.3;
    mesho2.position.y = -0.4;
    //-------------------------------------------
   
    //création d'un L
    
    const L1 = createRectangleWithHole(
      0.5,2,0,0);
    const L2 = createRectangleWithHole(
        1.5,0.5,0,0);
  
    const geometryrec = new THREE.ShapeGeometry(L1);  
    const geometryL2 = new THREE.ShapeGeometry(L2);
    const materialrec = new THREE.MeshBasicMaterial({
      color: 0x084a83,
      side: THREE.DoubleSide,
    });
    
    const meshL1 = new THREE.Mesh(geometryrec, materialrec);
    const meshL2 = new THREE.Mesh(geometryL2, materialrec);
    meshL1.position.x=5
    meshL2.position.x=4.5
    meshL2.position.y=-1
    //----------------------------------------------
    //création du I
    const i1 = createRectangleWithHole(
      0.5,2,0,0);
      const geometryi = new THREE.ShapeGeometry(i1); 
      const meshi1 = new THREE.Mesh(geometryrec, materialrec); 
    
    meshi1.position.x=3
    meshi1.position.y=-0.2
    //-----------------------------------------
    // Création du "C"
    
    const thickness = 0.4;
    const startAngle = Math.PI * 0.5;
    const endAngle = Math.PI * 1.5;
    const radiusc=1.2
    const cShape = createC(radiusc, thickness, startAngle, endAngle);
    const extrudeSettings = { depth: 0.2, bevelEnabled: false };
    const geometryc = new THREE.ExtrudeGeometry(cShape, extrudeSettings);
    const materialc = new THREE.MeshBasicMaterial({ color: 0x084a83 });
    const mesh = new THREE.Mesh(geometryc, materialc);
    mesh.position.x=0.5
    mesh.position.y=-0.2
    scene.add(mesh);


    // Création du rectangle avec une partie enlevée
    const width = 20;
    const height = 10;
    const holeWidth = 19;
    const holeHeight = 6.5;

    const rectangleShape = createRectangleWithHole(
      width,
      height,
      holeWidth,
      holeHeight
    );
    const geometryrect = new THREE.ShapeGeometry(rectangleShape);  
    const meshrec = new THREE.Mesh(geometryrect, materialrec);
  // création dun D
  const cdr = createRectangleWithHole(
    0.5,2.4,0,0);
  const geometryd = new THREE.ShapeGeometry(cdr);
  const meshd = new THREE.Mesh(geometryd, materialrec);
  meshd.position.x=-3
  meshd.position.y=-0.2
  const startAnglecd = Math.PI * 1.5;
  const endAnglecd = Math.PI * 0.5;
  const cd = createC(radiusc, thickness, startAnglecd, endAnglecd);
  const geometrycd = new THREE.ExtrudeGeometry(cd, extrudeSettings);
  const meshcd = new THREE.Mesh(geometrycd, materialc);
  meshcd.position.x=-3 
  meshcd.position.y=-0.2
  scene.add(meshcd);
  scene.add(meshd);
  // création dun E
  const geometryE1 = new THREE.ShapeGeometry(L2);
  const geometryE2 = new THREE.ShapeGeometry(L2);
  const geometryE3 = new THREE.ShapeGeometry(L2);
  const geometryE = new THREE.ShapeGeometry(L1)
  const meshE1 = new THREE.Mesh(geometryE1, materialrec);
  const meshE2 = new THREE.Mesh(geometryE2, materialrec);
  const meshE3 = new THREE.Mesh(geometryE3, materialrec);
  const meshE = new THREE.Mesh(geometryE, materialrec);
  
  meshE.position.x=-5.5
  meshE.position.y=-0.3
  meshE1.position.x=-6
  meshE2.position.x=-6
  meshE2.position.y=-1.1
  meshE3.position.y=+0.9
  meshE3.position.x=-6
  scene.add(meshE1);
  scene.add(meshE2);
  scene.add(meshE3);
  scene.add(mesh);
  scene.add(meshE);
  
  //-------------------------------------
    scene.add(mesho);
    scene.add(mesho2);
    scene.add(meshi1);
    scene.add(meshL1);
    scene.add(meshL2);
    scene.add(meshrec);
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }
}

loader.load(
  'https://your-github-username.github.io/your-repo-name/apple_glass.glb',
  function(gltf) {
    glassesModel = gltf.scene;
    glassesModel.scale.set(1.5, 1.5, 1.5);
    scene.add(glassesModel);
    
    // Set up materials and UI as before
    // ...
  },
  undefined,
  function(error) {
    console.error('Error loading model:', error);
  }
);

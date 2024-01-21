AFRAME.registerComponent("car", {
    schema: {
      model: {type: "string", default:"vintage-wagon_cartoon_car/scene.gltf" },
      
    },
    init: function () {
        this.el.setAttribute("gltf-model",this.data.model);
        this.el.setAttribute("position",{x:0, y:50,z:80})
        this.el.setAttribute("rotation",{x:0, y:-100,z:0})
        
      }
  });
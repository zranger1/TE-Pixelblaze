// Consolidated Titanic's End Palettes for Pixelblaze
// Test pattern - lets the user select a palette with
// the webUI slider.
// v1.0

var TE_Cyan_Blue_Purple = [
  0.0, 0.1326, 0.0038, 0.16,        // plumice dark purple
  0.1666, 0.1059, .0055, 0.4818,    // sunset purple  
  0.3333, 0.061, 0.0246, 0.5610,    // synwavedyn purpler
  0.5, 0.4086, 0.25196, 0.9006,     // IceGrad desat light purple  
  0.6667, 0.1964, 0.6029, 1.0,      // sunwave cyan  
  1.0, 0.1246, 0.6275, 0.8277,      // iecOlate cyan
  ]

var TE_Pink_Purple = [
    0.0, 0.1059, 0.0055, 0.4818,    
    0.3333, 0.1059, 0.02977, 0.5610, 
    0.6667, 0.3986, 0.0246, 0.2034, 
    1.0, 0.9006, 0.2105, 0.4603,
]

var TE_Cyan_Green = [
    0.0, 0.0038, 0.3888, 0.2214,    
    0.3333, 0.0055, 0.7924, 0.346,
    0.6667, 0.1273, 0.9006, 0.7924, 
    1.0, 0.1569, 0.609, 0.8277, 
]

var TE_Orange_Green = [
    0.0, 0.1301, 0.9231, 0.0015,    
    0.5, 0.5206, 0.9156, 0.0339, 
    1.0, 0.9231, 0.5206, 0.0629,
]

var TE_Cyan_Ice = [
    0.0, 0.0024, 0.1164, 0.9006,    
    0.1667, 0.0465, 0.2599, 0.9006, 
    0.3333, 0.0517, 0.4982, 0.8277, 
    0.5, 0.1963, 0.6029, 1.0,       
    0.6667, 0.1246, 0.6275, 0.8277,  
    1.0, 0.6275, 0.7108, 1.0,      
]

var pal = TE_Cyan_Blue_Purple;

var palettes = [TE_Cyan_Blue_Purple,TE_Pink_Purple,TE_Cyan_Green,TE_Orange_Green,TE_Cyan_Ice]

export function sliderPalette(v) {
  pal = palettes[v * (palettes.length - 1)]
}

setPalette(pal)
export function beforeRender(delta) {
  setPalette(pal)  
}

export function render(index) {
  paint(index/pixelCount)
}
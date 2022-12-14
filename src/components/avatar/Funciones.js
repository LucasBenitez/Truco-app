import imagenes from './AvatarImagenes';

export const mostrarAvatarSeleccionadoMasConfiguracion = (avatarNoSeleccionado)=>{
  
    let ocultarAvatarNoSeleccionado= document.querySelector(`${avatarNoSeleccionado}`);
    ocultarAvatarNoSeleccionado.remove();
    document.querySelector('.guardarAvatar').style.display="block";
    document.querySelector('.componente-cambio-aspecto').style.display="block";
 
 }
 
 export const getPeloActualAvatar = () =>{
   let img = document.querySelector('#pelo-actual');
   let imagenActual = img.classList[1];
   let posicionUltimoGuion = imagenActual.lastIndexOf("-");   
  return imagenActual.substring( 0 , posicionUltimoGuion+1);
 }

 export const modificarClaseImgPelo=(nuevaClase)=>{
   let img = document.querySelector('#pelo-actual');
   let imagenActual = img.classList[1];

   img.classList.remove(imagenActual);
   img.classList.add(nuevaClase);
 }
 
 export const setPelo = (peloColorNuevo, cejaColorNuevo) => {
   let peloActual = document.querySelector('#pelo-actual');
   let cejaColorActual = document.querySelector('.ceja-izq').classList[1];
   document.querySelector('.ceja-izq').classList.remove(cejaColorActual);
   document.querySelector('.ceja-der').classList.remove(cejaColorActual);
   document.querySelector('.ceja-izq').classList.add(cejaColorNuevo);
   document.querySelector('.ceja-der').classList.add(cejaColorNuevo);
    let nombreImg=getPeloActualAvatar();
    let nuevoValor=nombreImg+peloColorNuevo;
    modificarClaseImgPelo(nuevoValor);
    peloActual.src=imagenes[`${nuevoValor}`];
 };
 
 export const setPiel = (colorNuevo) => {
   let colorActual = document.querySelector('.cabeza').classList[1];
 
   document.querySelector('.cabeza').classList.remove(colorActual);
   document.querySelector('.oreja-der').classList.remove(colorActual);
   document.querySelector('.oreja-izq').classList.remove(colorActual);
   document.querySelector('.cuello').classList.remove(colorActual);
   document.querySelector('.brazo-der').classList.remove(colorActual);
   document.querySelector('.brazo-izq').classList.remove(colorActual);
 
   document.querySelector('.cabeza').classList.add(colorNuevo);
   document.querySelector('.oreja-der').classList.add(colorNuevo);
   document.querySelector('.oreja-izq').classList.add(colorNuevo);
   document.querySelector('.cuello').classList.add(colorNuevo);
   document.querySelector('.brazo-der').classList.add(colorNuevo);
   document.querySelector('.brazo-izq').classList.add(colorNuevo);
 };
 
 export const setOjos = (colorNuevo) => {
   let colorActual = document.querySelector('.iris-der').classList[1];
 
   document.querySelector('.iris-izq').classList.remove(colorActual);
   document.querySelector('.iris-der').classList.remove(colorActual);
   document.querySelector('.iris-izq').classList.add(colorNuevo);
   document.querySelector('.iris-der').classList.add(colorNuevo);
 };

 export const setRopa = (ropaNueva) =>{
  document.querySelector('#ropaActual').src=imagenes[`${ropaNueva}`];;
}

 export const getPelo = () =>{
  return document.querySelector('#pelo-actual').classList[1];
 }

 export const getPiel = () =>{
  return document.querySelector('.cabeza').classList[1];
 }

 export const getOjos = () =>{
  return document.querySelector('.iris-izq').classList[1];
 }

export const getRopa = () =>{
  return document.querySelector('#ropaActual').classList[0];
 }

 
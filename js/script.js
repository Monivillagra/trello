    function agregaFormulario(){
    var contMaster = document.getElementById('contMaster'); //se crea id del contenedor principal 
    //Crear elementos
    var botonFormulario = document.createElement('div'); //se crea div que contiene el formulario
    botonFormulario.setAttribute('id', 'btnFormulario'); //se crean atributo id para el div
    var contPanel = document.createElement('div');//se crea div de la caja formulario
    contPanel.setAttribute('class', 'well panelWell'); //se crean atributo class para el div
    var contInput = document.createElement('div'); //se crea div de input
    var inputFormulario = document.createElement('input'); //se crea input que recibe la tarea
    inputFormulario.setAttribute('type', 'text'); //se crea atributo type de input
    inputFormulario.setAttribute('placeholder', 'Agrega una lista...'); //se crea atributo placeholder
    inputFormulario.setAttribute('id', 'inpTarea'); //se crea atributo id
    //boton guardar
    var btnGuardar = document.createElement('button'); //se crea elemento button
    btnGuardar.setAttribute('class', 'btn btn-success btnGuardar'); //se crean atributos clases al boton guardar
    var textoBtnGuardar = document.createTextNode('Guardar'); //se crea nodo de texto para boton guardar
    //boton borrar
    var btnBorrar = document.createElement('button'); //se crea elemento button 
    btnBorrar.setAttribute('class', 'btn btn-danger btnBorrar'); //se crea atributos clases al boton borrar
    var textoBtnBorrar = document.createTextNode('Delete'); //se crea nodo texto para el boton borrar
    //hijos de botones
    btnBorrar.appendChild(textoBtnBorrar); //se ingresa el texto delete en el boton borrar
    btnGuardar.appendChild(textoBtnGuardar); //se ingresa el texto guardar en el boton guardar
    contInput.appendChild(inputFormulario); //se mete el input de formulario dentro del input que lo contiene
    //hijos de formulario
    contPanel.appendChild(contInput); //se mete el input dentro de la caja formulario
    contPanel.appendChild(btnGuardar); //se mete el boton guardar dentro del input
    contPanel.appendChild(btnBorrar); //se mete el boton borrar dentro del input
    
    botonFormulario.appendChild(contPanel); // se mete el div de la caja formulario dentro del div que contiene el formulario
    contMaster.appendChild(botonFormulario); // se mete el div que contiene el formulario en la section que es el contenedor principal
}
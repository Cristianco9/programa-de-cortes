<h1 align="center">INSTALANDO CALL<h1> 

<h6 align="center">version: 1.0.0<h6>

<p>proyecto OpenSource</p>

#### DOCUMENTACIÒN

> En este documento se encuentra toda la documentaciòn del desarrollo de este proyecto institucional.

#### ANALISIS

> Descripción del proyecto a desarrollar

Propuesta de una aplicación Web la cual permite automatizar el proceso de despiese de materiales de un pedido realizado por un cliente. Ya que actualmente todos los cálculos necesarios para realizar este proceso se realizan de forma manual junto con el uso de herramientas ofimaticàs como Excel, mediante las cuales se llenan campos con las medidas deseadas por el cliente, los tipos de materiales, entre otros. Además se quiere representar por medio de figuras el perimetro total del pedido del cliente. Y tener una base de datos con un registro historico de clientes y pedidos y otra base de datos con el invertanrio de materiales disponibles.

Durante la primera reunion con el cliente (07/09/2023) nos expresa que cada lamina material tiene una medida máxima de 6 metros, por lo que la solución a desarrollar debe adaptarse a esa restricción fisica limitando como medida máxima para utilizar 5.90 metros, priorizando el ahorro de materiales, y sí el pedido del cliente supera el límite de cada lamina (5.90 metros) debera divirse sobre este límite y la parte restante debe realizarse en otra lamina, o sí el pedido del cliente requiere de multiples cortes debera divirlos en la cantidad de laminas necesarias. Una vez realizado este proceso se deberá comparar la cantidad de material necesario con la cantidad de material disponible en el inventario y generar una respuesta al usuario confirmando si el material en invetario es el suficiente o sí por lo contrario es necesario adquirir más material.

Los productos de anjeos son los más fuertes en el portafolio de la empresa. Por lo tanto está aplicación tiene un alcance espeficio y de gran impacto en el desarrollo de los mismos.

#### ANALISIS Y ESPECIFICACiÓN DE REQUERIMIENTOS

> Requerimientos del proyecto

- Control efectivo de invetario
- Alta disponibilidad
- Aplicación web multiplataforma.
- La aplicación debe guardar los datos del pedido en un documento .PDF
- La aplicación debe poder editar pedidos 
- La aplicación debe tener componente de login (inicio de sección)
- La orden de pedido debe estar vinculada a la orden de corte pero deben ser independiente


> Requerimientos funcionales


> Requerimientos no funcionales


> Criterios de exito

- La aplicación como resultado de la funcionalidad de cálculo de corte debe mostrar gráficamente el pedido del cliente y especificar cuanto material necesita en unidades de metros. Además está vista de la aplicación debe tener un botón de guardar que le permita al usuario guardar estos resultados en un documento en formato PDF que luego pueda imprimir y llevar al taller de corte.

La secretaria imprime el pedido aprovadó por el cliente y el jefe de taller se encarga de definir el material. El objetivo es que el programa realice este trabajo de calcular el material necesario y estos datos esten ya definidos en el momento en que la secretaria entrega el pedido al jefe de taller y esta ya no tenga que realizar esta tarea.

En está primera etapa el alcance de la aplicación será unicamente para el proceso de despiece y cálculo de materiales del producto de anjeo y solo interviene en el proceso de realizar un anjeo. Ya que la empresa tiene mucho más productos y este programa tiene un alcance limitado y no interviene con el modelo de negocio y con otros procesos.

La vista de pedido del cliente debe permite poder agregar multiples cortes en un solo pedido por lo que se deduce que el programa dede tener un botón que permita crear más objetos (el objeto sería cada anejo) al final el programa debe mostrar el total de anjeos (objetos).


> Historias de usuario

- **ACTUALMENTE** una persona se dedica a realizar el proceso de calcular los materiales y los costos necesarios para elaborar el pedido del cliente manualmente con la ayuda de hojas de calculo en Excel en las cuales ingresan las medidas y muestra cuanto material se necesitan. Luego el jefe de compará la cantidad de material necesario con la cantidad de material disponible en el invetario y se encarga de realizar las comprar necesarias.
 
 


#### RIESGOS 

#### DISEÑO DE LA SOLUCIÓN

- Definir la cantidad total de vista que tendra la primera etapa de desarrollo
- Bocetos de las interfaces gráficas | vistas de usuario
- Wireframes
- Mockups
- Modelo BBDD (Base de Datos)
- Diagramas de las BBDD
- Algoritmo matemático
- Algoritmos de código
- Diagramas de flujo
- Diagramas UML

#### DISEÑO DE LAS ETAPAS

> 1 etapa
> construcción del equipo e involucrados en el proyecto.
> conocer el flujo de interacción humana desde que llega el cliente hasta que se entrega el pedido.

> fecha de entrega:

> 2 etapa


> fecha de entrega:

#### DESARROLLO

#### PRUEBAS


#### DESPLIEGUE

#### CONTROL DE CALIDAD


***************************************************************************************************************************************************
primero identifcar y definir "los perfiles" perfil de anjeo liviano...

angulo de perfil 0.5 pulgada, 0.75 pulgada, 1 pulgada



tipos de errores que tiene a diario

- malos calculos.
-  

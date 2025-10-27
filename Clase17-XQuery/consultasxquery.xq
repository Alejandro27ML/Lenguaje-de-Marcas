(: -Extraer preciones menores a 10-
for $x in doc("coleccion.xml")/coleccion/cd
where $x/precio < 10
return $x/titulo
:)

(: -Diferencias For y Let-
-vamos a estraer solo los títulos de los dc-


for $x in doc("coleccion.xml")/coleccion/cd/titulo
return <titulos>{$x}</titulos>


let $x:=doc("coleccion.xml")/coleccion/cd/titulo
return <titulos>{$x}</titulos>
:)

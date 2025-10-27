(:Bucles For:)
(:Vincula una o mas variables a expresiones XPath:)
(:Crea un flujo de tuplas, cada tupla está vinvula a una variable:)

for $x in (1 to 5)
return <numero>{$x}</numero>

for $x at $y in doc("coleccion.xml")/coleccion/cd
return <cd>{$x},{$y}</cd>

(:LET:)
(:Vincula una variable al resultado completo de una expresión añadiendo esos vinculos a las tuplas generas por una cláusula for:)

let $s:=7
let$z:=10

return 10+$s+$z

(:Where:)
(:Filtrar las tuplas eliminando todos los valores que no cumplan las condiciones dadas:)

for $x in doc("coleccion.xml")/coleccion/cd
where $x/precio < 10
return $x/titulo

(:Order by:)
(:Ordena las tuplas según un criterio dado:)

order by $x/precio ascending

(:Return:)
(:Construye el resultado de la consulta para una tupla dada:)

return <cd>data{$x/titulo}</cd>

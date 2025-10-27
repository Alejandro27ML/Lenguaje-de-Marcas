(:1-Mostrar los titulos de los cds:)
(: for $x in doc("coleccion.xml")//cd
return $x/titulo :)

(:2-Mostrar todos los artistas:)
(: for $x in doc("coleccion.xml")//cd
return $x/artista :) 

(:3-Mostrar titulo y artistas juntos:)
(: for $x in doc("coleccion.xml")//cd
return concat($x/titulo," - ",$x/artista) :)

(:4-Mostrar solo el título del primer CD :)
(: doc("coleccion")//cd[1]/titulo :)

(:5-Mostrar cd cuyo artista sea Bob Dylan:)
(: for $cd in doc("coleccion.xml")//cd
where $cd/artista = "Bob Dylan"
return $cd/titulo :)

(:6-Mostrar todos los titulos ordenados alfabeticamente:)
(: for $cd in doc("coleccion.xml")//cd
order by $cd/titulo 
return $cd/titulo :)

(:7-Crear una nueva estructura XML con título y artista:)
(: <catalogo>
{
  for $cd in doc("coleccion.xml")//cd
  return
    <disco>
      <nombre>{data($cd/titulo)}</nombre>
      <cantante>{data($cd/artista)}</cantante>
    </disco>
}
</catalogo> :)

(:8-Mostrar cuantos cds hay en total:)
(: count(doc("coleccion.xml")//cd) :)

(:9-Mostrar el título del ultimo cd:)
(: let $cds := doc("coleccion.xml")//cd
return $cds[last()]/titulo :)

(:10-Mostrar titulos con la palabra heart:)
(: for $cd in doc("coleccion.xml")//cd
where contains(lower-case($cd/titulo),"heart")
return $cd/titulo :)
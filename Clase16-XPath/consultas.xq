(: doc("ies.xml")//ies/nombre :)

(: doc("ies.xml")//ies/web :)

(: for $x in doc("ies.xml")//ciclos/ciclo
return $x/nombre :)

(: for $x in doc("ies.xml")//ciclo
return data($x/@id) :)

(: for $x in doc("ies.xml")//ciclos/ciclo
where $x/grado = "Superior"
return $x/nombre :)

(: for $x in doc("ies.xml")//ciclos/ciclo
return concat($x/nombre," - ",$x/decretoTitulo/@año) :) 


(: <ciclosFormativos>{
  for $ciclo in doc("ies.xml")//ciclo
  return
    <ciclo>
      <nombre>{data($ciclo/nombre)}</nombre>
      <grado>{data($ciclo/grado)}</grado>
      <año>{data($ciclo/decretoTitulo/@año)}</año>
    </ciclo>
}</ciclosFormativos> :)


(: for $ciclo in doc("ies.xml")//ciclo
where $ciclo/decretoTitulo/@año <2010
return $ciclo/nombre :)

(: for $ciclo in doc("ies.xml")//ciclo :)



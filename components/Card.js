import { Card, Grid, Text, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container gap={2}>
      <Grid  xs={4} justify="center" align="end">
        <Card 
         onClick={() => {
          window.open("https://listado.mercadolibre.com.ar/teclado-mecanico");
         }}
         css= {{ border: "5px solid Navy" , size:"500px"}}
         isPressable
         isHoverable >
                  
          <Card.Body className="carta1" > 
            <Text className="Texto1"  align="center" color="Black">Teclados Mecanicos</Text>
            <Image className="imagen1"  src="https://ae01.alicdn.com/kf/Sa6498e8b42d54eaa93fe7890a5646d4ft.jpg" alt="Imagen de la carta" objectFit="fill"/>
          </Card.Body> 
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card 
        onClick={() => {
          window.open("https://listado.mercadolibre.com.ar/combos-teclado-mouse-auriculares#D[A:combos%20teclado%20mouse%20auriculares]");
         }}
        css= {{ border: "5px solid Navy" , size:"500px"}}
        isPressable
        isHoverable>
          <Card.Body className="carta2">
            <Text className="Texto1"  align="center" color="Black">Combos</Text>
            <Image className="imagen1"  src="https://m.media-amazon.com/images/I/81oWdEdBACL._AC_UF894,1000_QL80_.jpg" alt="Imagen de la carta" objectFit="fill"/>
          </Card.Body>
        
        </Card>
      </Grid>
      <Grid xs={4} justify="center" align="end">
        <Card 
        onClick={() => {
          window.open("https://listado.mercadolibre.com.ar/teclados-membrana#D[A:teclados%20membrana]");
         }}
        className="carta3" css= {{ border: "5px solid Navy" , size:"500px"}}
        isPressable
        isHoverable>
          <Card.Body>
        <Text className="Texto1"  align="center" color="Black">Teclados de Membrana</Text>
        <Image className="imagen1"  src="https://img.pccomponentes.com/pcblog/3298/teclados-de-membrana.jpg" alt="Imagen de la carta" objectFit="fill"/>
        </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>

  );
}

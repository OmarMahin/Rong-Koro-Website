
import Canvas2 from "../components/Canvas2";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Toolbar from "../components/Toolbar";
import { ColorPickerProvider } from "../context/ColorPickerContext";
import { PaintToolProvider } from "../context/PaintToolContext";

export default function Test() {
  return (
    <Container>
      <PaintToolProvider>
        <ColorPickerProvider>
          <Toolbar />
          <Canvas2/>
        </ColorPickerProvider>
      </PaintToolProvider>
    </Container>
  );
}

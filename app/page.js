import Canvas from "./components/Canvas";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Toolbar from "./components/Toolbar";
import { ColorPickerProvider } from "./context/ColorPickerContext";
import { PaintToolProvider } from "./context/PaintToolContext";

export default function Home() {
  return (
    <Container>
      <PaintToolProvider>
        <ColorPickerProvider>
          <Toolbar />
          <Canvas />
        </ColorPickerProvider>
      </PaintToolProvider>
    </Container>
  );
}

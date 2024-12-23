import { Box, Editor, exportToBlob } from "tldraw";

interface Props {
  editor: Editor;
  container: HTMLElement;
}
async function exportAsBlob({ editor, container }: Props) {
  const editorContainerComputedStyle = getComputedStyle(container);
  const editorWidth = Math.min(
    parseInt(editorContainerComputedStyle.width),
    800,
  );
  const editorHeight = Math.min(
    parseInt(editorContainerComputedStyle.height),
    400,
  );

  const bounds = new Box(-70, -8, editorWidth, editorHeight);

  const img = await exportToBlob({
    editor: editor,
    ids: [],
    format: "png",
    opts: {
      background: false,
      padding: 0,
      bounds,
    },
  });
  return img;
}

export default exportAsBlob;

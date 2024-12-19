import {
  DefaultQuickActions,
  DefaultToolbar,
  TLComponents,
  Tldraw,
  useCanRedo,
  useCanUndo,
  useActions,
  TldrawUiMenuItem,
  ContextMenu,
  Editor,
  DefaultSizeStyle,
} from "tldraw";
import "tldraw/tldraw.css";

const components: TLComponents = {
  NavigationPanel: null,
  Toolbar: () => <DefaultToolbar>{}</DefaultToolbar>,
  ContextMenu: () => <ContextMenu></ContextMenu>,
  QuickActions: () => {
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();
    const actions = useActions();
    return (
      <DefaultQuickActions>
        <TldrawUiMenuItem {...actions.undo} disabled={!canUndo} />
        <TldrawUiMenuItem {...actions.redo} disabled={!canRedo} />
      </DefaultQuickActions>
    );
  },
  PageMenu: null,
  ActionsMenu: null,
};

function DrawBoard({ editorRef, editorContainerRef }) {
  function handleClearEditor() {
    editorRef.current
      ?.selectAll()
      .deleteShapes(editorRef.current.getSelectedShapes());
  }
  return (
    <div className="flex flex-col items-center w-full">
      <div ref={editorContainerRef} className="w-full h-72 flex flex-col relative">
        <button
          onClick={handleClearEditor}
          className="z-20 -translate-x-1/2 top-0 left-1/2 absolute text-black"
          type="button"
        >
          Clear Board
        </button>
        <Tldraw
          className="rounded-md w-full h-full"
          onMount={(editor: Editor) => {
            editorRef.current = editor;
            editor.setCameraOptions({
              isLocked: true,
            });
            editor.selectAll().deleteShapes(editor.getSelectedShapeIds());
            editor.setStyleForNextShapes(DefaultSizeStyle, "s");
          }}
          hideUi
          persistenceKey="disable-pages"
          options={{ maxPages: 1 }}
          autoFocus={false}
          components={components}
          initialState="draw"
        />
      </div>
    </div>
  );
}

export default DrawBoard;

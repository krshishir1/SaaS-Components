import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  useCurrentEditor,
  Node,
  Mark
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Strike from "@tiptap/extension-strike";

import { Button, IconButton, Stack, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { useState } from "react";

const content = `
  <p>Hello Folks</p>
`;

const VolumeExtension = Mark.create({
  name: "volume",
  // addOptions() {
  //   return {
  //     HTMLAttributes: {},
  //   }
  // },
  addAttributes() {
    return {
      prosody: {
        default: 1,
        renderHTML: (attributes: any) => ({
          prosody: attributes.prosody
        }),
      },
    };
  },
  addCommands() {
    return {
      setVolume: () => ({commands} : any) => commands.toggleMark(this.name)
    };
  },
  renderHTML({ HTMLAttributes }: any) {
    return ["span", HTMLAttributes, 0];
  },
  parseHTML() {
    return [
      {
        tag: "span"
        
      }
    ]
  }
});

const RateExtension = Mark.create({
  name: "rate",
  // addOptions() {
  //   return {
  //     HTMLAttributes: {},
  //   }
  // },
  addAttributes() {
    return {
      rate: {
        default: 1,
        renderHTML: (attributes: any) => ({
          rate: attributes.rate
        }),
      },
    };
  },
  addCommands() {
    return {
      setRate: () => ({commands} : any) => commands.toggleMark(this.name)
    };
  },
  renderHTML({ HTMLAttributes }: any) {
    return ["div", HTMLAttributes, 0];
  },
  parseHTML() {
    return [
      {
        tag: "div"
        
      }
    ]
  }
});

const extensions = [StarterKit, Strike, VolumeExtension, RateExtension];

const MenuBar = ({ setHtml }: any) => {
  const { editor } = useCurrentEditor();

  return (
    editor && (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          px: 4,
          py: 2,
          border: 1,
          borderColor: "secondary.main",
          borderRadius: 5,
        }}
      >
        <IconButton onClick={() => editor.chain().focus().toggleBold().run()}>
          <FormatBoldIcon />
        </IconButton>
        <Button onClick={() => editor.commands.setVolume()}>volume</Button>
        <Button onClick={() => editor.commands.setRate()}>rate</Button>

        <Button color="secondary" onClick={() => setHtml(editor.getHTML())}>
          Print
        </Button>
      </Stack>
    )
  );
};

const TextEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  const [editorHtml, setEditorHtml] = useState<any>(null);

  return (
    <>
      <EditorProvider
        slotBefore={<MenuBar setHtml={setEditorHtml} />}
        extensions={extensions}
        content={content}
      >
        {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
      </EditorProvider>

      <Typography sx={{ fontSize: 14 }}>{editorHtml}</Typography>
    </>
  );
};

export default TextEditor;

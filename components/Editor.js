import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
  });

  const [isEditable, setIsEditable] = React.useState(true);

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  return (
    <>
      <div className="flex gap-2">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-slate-700">
          Content
        </span>
        <input
          type="checkbox"
          checked={isEditable}
          onChange={() => setIsEditable(!isEditable)}
        />
        <span>Editebel</span>
      </div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            strike
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            code
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            paragraph
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            h6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            ordered list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            code block
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            blockquote
          </button>
          {/* <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            horizontal rule
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            hard break
          </button> */}
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="bg-gray-900 text-white text-sm p-1 rounded-sm hover:bg-blue-200 hover:text-blue-700 m-1"
          >
            redo
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
}

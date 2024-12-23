"use client";
import React, { useRef } from "react";
import { Editor } from "tldraw";

import Rating from "../rating";
import DrawBoard from "../draw-board";
import exportAsBlob from "@/util/exportAsBlob";
import { uploadImage } from "@/query/ImageQuery";
import { registerComment } from "@/query/CommentQuery";

const SignModal = ({ setCurrentComments }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const editorRef = useRef<Editor | null>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);

  function handleOpenModal() {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  function handleCancel() {
    modalRef.current?.close();
    handleClearModal();
  }

  async function handleSubmit() {
    // have "rating" , "comment"
    const formData = new FormData(formRef.current!);

    const imageBlob = await exportAsBlob({
      editor: editorRef.current!,
      container: editorContainerRef.current!,
    });
    const imageUrl = await uploadImage(imageBlob);

    formData.append("imageUrl", imageUrl);
    const comment = await registerComment({ formData });
    setCurrentComments((currentComments) => [...currentComments, comment]);
    handleClearModal();
  }

  function handleClearModal() {
    editorRef.current
      ?.selectAll()
      .deleteShapes(editorRef.current.getSelectedShapes());
    formRef.current!.reset();
  }

  return (
    <>
      {renderShowBtn()}
      <dialog ref={modalRef} className="modal">
        <div className="p-5 max-md:w-2/3 w-1/3 rounded-xl bg-amber-500 dark:bg-blue-900">
          {renderTitle()}
          {renderForm()}
        </div>
      </dialog>
    </>
  );

  function renderShowBtn() {
    return (
      <button
        className="flex h-12 p-3 rounded-md shadow-md bg-amber-500 dark:bg-blue-900"
        onClick={handleOpenModal}
      >
        Sign Guestbook
      </button>
    );
  }

  function renderTitle() {
    return (
      <h3 className="text-center font-bold text-lg mb-4">Sign my guestbook!</h3>
    );
  }

  function renderForm() {
    return (
      <form
        ref={formRef}
        className="relative flex flex-col items-center gap-2"
        action="#"
        onSubmit={handleSubmit}
        method="dialog"
      >
        <Rating />
        <textarea
          name="comment"
          className="textarea w-full m-2 bg-amber-400 dark:bg-blue-800"
          placeholder="Comment"
        ></textarea>
        <DrawBoard
          editorRef={editorRef}
          editorContainerRef={editorContainerRef}
        />
        {renderModalButtons()}
      </form>
    );
  }

  function renderModalButtons() {
    return (
      <div className="flex gap-5 mt-3">
        <button
          onClick={handleCancel}
          type="button"
          className="p-2 rounded-md  bg-amber-400/80 dark:bg-blue-700/80 hover:opacity-85"
        >
          Cancel
        </button>
        <button
          className="p-2 rounded-md bg-amber-400/80 dark:bg-blue-700/80 hover:opacity-85"
          type="submit"
        >
          Submit
        </button>
      </div>
    );
  }
};

export default SignModal;

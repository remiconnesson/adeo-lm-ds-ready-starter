"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function FileUploaderExample() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="mc-file-uploader" style={{ width: 360, border: "1px dashed #b6b6b6", borderRadius: 8, padding: 16 }}>
      <label className="mc-file-uploader__label" style={{ display: "block", textAlign: "center" }}>
        <span style={{ display: "block", marginBottom: 8, color: "#6e6e6e", fontSize: 13 }}>Drop files here or</span>
        <span className="mc-button mc-button--outlined mc-button--s" style={{ display: "inline-flex" }}>
          <span className="mc-button__label">Choose files</span>
        </span>
        <input type="file" multiple style={{ display: "none" }} onChange={(e) => setFiles(Array.from(e.target.files ?? []))} />
      </label>
      {files.length > 0 && (
        <ul className="mc-file-uploader__list" style={{ marginTop: 12, listStyle: "none", padding: 0, fontSize: 13 }}>
          {files.map((f) => <li key={f.name}>{f.name}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function FileUploaderDemo() {
  return (
    <Demo
      title="Drag and drop or pick files"
      code={`<div className="mc-file-uploader">
  <label className="mc-file-uploader__label">
    Drop files here or
    <span className="mc-button mc-button--outlined"><span className="mc-button__label">Choose files</span></span>
    <input type="file" multiple hidden onChange={onChange} />
  </label>
  <ul className="mc-file-uploader__list">{files.map(f => <li key={f.name}>{f.name}</li>)}</ul>
</div>`}
    >
      <FileUploaderExample />
    </Demo>
  );
}

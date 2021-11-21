import React, { useCallback } from "react";
import { FormField } from "@sanity/base/components";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

const CodeInput = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value

    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onChange,
  } = props;

  const onCodeChange = useCallback(
    (code) => {
      onChange(PatchEvent.from(code ? set(code) : unset()));
    },
    [onchange]
  );

  return (
    <FormField
      description={type.description} // Creates description from schema
      title={type.title} // Creates label from schema title
      __unstable_markers={markers} // Handles all markers including validation
      __unstable_presence={presence} // Handles presence avatars
      compareValue={compareValue} // Handles "edited" status
    >
      <AceEditor
        mode="javascript"
        name="ace-editor-code"
        width="100%"
        theme="github"
        value={value}
        tabSize={2}
        setOptions={{ useWorker: false }}
        onChange={onCodeChange}
        ref={ref}
      ></AceEditor>
    </FormField>
  );
});

export default CodeInput;

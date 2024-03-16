import {Check, Copy} from "lucide-react";
import {useEffect, useRef, useState} from "react";

export function CopyToClipboard({copyContent}: { copyContent: string }) {
    let [clipboard_toggled, set_clipboard_toggle] = useState(false);
    let [timeout_id, set_timeout_id] = useState(undefined);

    // Make sure we only ever have one timeout active.
    useEffect(() => {
        return () => {
            if (timeout_id != undefined) {
                clearTimeout(timeout_id);
            }
        }
    }, [timeout_id]);

    return (
        <div
            className="copy-to-clipboard-button flex relative items-center border-l-2 h-[100%] border-[#262626]"
            onClick={async () => {
                await navigator.clipboard.writeText(copyContent);

                // Get rid of any old timeout.
                if (timeout_id != undefined) {
                    clearTimeout(timeout_id);
                }
                // @ts-ignore
                set_timeout_id(setTimeout(() => {
                    set_clipboard_toggle((prevState) => !prevState);
                }, 1800));

                set_clipboard_toggle((prevToggleState) => true);
            }}
        >

            {clipboard_toggled
                ?
                <Check className="mx-[10px] text-green-400"/>
                :
                <Copy className="mx-[10px]"/>
            }

            <div role="tooltip"
                 data-toggled={clipboard_toggled}
                 className="tooltip-copy-to-clipboard text-center text-[11px] py-2 absolute z-10 bottom-[100%] w-[150px] inline-block text-sm font-medium text-white rounded-lg shadow-sm tooltip bg-gray-600">
                {clipboard_toggled ?
                    <span>Copied!</span>
                    :
                    <span>Copy to clipboard</span>
                }
                <div
                    className="absolute w-2.5 h-2.5 bg-gray-600 left-[50%] bottom-[-10px] translate-x-[-50%] translate-y-[-50%] rotate-45"></div>
            </div>
        </div>
    );
}
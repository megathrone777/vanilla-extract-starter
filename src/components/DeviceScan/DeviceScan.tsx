import React, { useState } from "react";
import BarcodeScanner, { BarcodeFormat } from "react-qr-barcode-scanner";

import { wrapperClass } from "./DeviceScan.css";

const DeviceScan: React.FC = () => {
  const [text, setText] = useState("");
  const [format, setFormat] = useState<BarcodeFormat>();

  return (
    <div className={wrapperClass}>
      <BarcodeScanner
        // formats={[BarcodeStringFormat.DATA_MATRIX]}
        height={300}
        onUpdate={(_err, result) => {
          if (result) {
            setFormat(result.getBarcodeFormat());
            setText(result.getText());

            return;
          }

          // setData("Not Found");
        }}
        stopStream={false}
        torch={false}
        width={300}
      />

      <p>{text}</p>
      {format && <p>Format - {BarcodeFormat[format]}</p>}
    </div>
  );
};

export { DeviceScan };

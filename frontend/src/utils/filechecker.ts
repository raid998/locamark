export function isValidFile(file: File): Promise<boolean> {

        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
              const uint = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
        
              let header = "";
              let isValid = false;
        
              // Read the magic number of the file
              uint.forEach((byte) => {
                header += byte.toString(16);
              });
        
              // Check if the file matches the PNG magic number
              if (header === "89504e47") {
                isValid = true;
              }
        
              // Check if the file matches the JPEG magic number
              if (header.startsWith("ffd8")) {
                isValid = true;
              }
        
              if (isValid) {
                resolve(true);
              } else {
                reject(new Error("Invalid file format"));
              }
            };
            fileReader.readAsArrayBuffer(file.slice(0, 4));
          });
  }
export const compressImage = (file: File, maxWidth = 800, maxHeight = 800, quality = 0.4): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const getDriveDirectUrl = (url: string): string => {
  if (!url) return '';
  
  let fileId = '';
  
  // Format 1: drive.google.com/file/d/ID/...
  const match1 = url.match(/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match1 && match1[1]) fileId = match1[1];
  
  // Format 2: drive.google.com/open?id=ID
  const match2 = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match2 && match2[1]) fileId = match2[1];
  
  if (fileId) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  return url;
};


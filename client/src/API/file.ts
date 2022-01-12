import { API_MEDIA_URL } from '../utils/conts';

export async function downloadFile(fileName: string, fileId: string) {
  const repsonse: any = await fetch(`${API_MEDIA_URL}/download/${fileId}`);

  if (repsonse.status === 200) {
    const blob = await repsonse.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    console.log(repsonse);
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

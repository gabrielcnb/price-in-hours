// OCR through the ocr.space API: works in Expo Go with no native modules
// Free key: sign up at https://ocr.space/ocrapi (25k requests/month free)
// The 'helloworld' key is a demo one, capped at 25 requests/20s, enough to try it out

export interface OcrWord {
  WordText: string;
  Left: number;
  Top: number;
  Height: number;
  Width: number;
}

export interface OcrLine {
  LineText: string;
  Words: OcrWord[];
}

export async function recognizeFromBase64(
  base64: string,
  apiKey = 'helloworld',
): Promise<OcrLine[]> {
  const body = new FormData();
  body.append('base64Image', `data:image/jpeg;base64,${base64}`);
  body.append('language', 'eng');
  body.append('OCREngine', '2');
  body.append('isOverlayRequired', 'true');
  body.append('scale', 'true');
  body.append('isTable', 'false');

  const res = await fetch('https://api.ocr.space/parse/image', {
    method: 'POST',
    headers: { apikey: apiKey },
    body,
  });

  if (!res.ok) throw new Error(`OCR HTTP ${res.status}`);

  const data = await res.json();

  if (data.IsErroredOnProcessing) {
    throw new Error(data.ErrorMessage?.[0] || 'OCR error');
  }

  return data.ParsedResults?.[0]?.TextOverlay?.Lines ?? [];
}

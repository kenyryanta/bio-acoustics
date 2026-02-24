import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, originalUrl } = req;

  // 1. Variabel untuk menyimpan salinan response body
  let responseBody: any;

  // 2. Simpan fungsi asli res.send bawaan Express
  const originalSend = res.send;

  // 3. Timpa res.send dengan fungsi buatan kita untuk mencegat datanya
  res.send = function (body: any) {
    responseBody = body; // Salin datanya
    return originalSend.call(this, body); // Panggil fungsi aslinya agar response tetap terkirim
  };

  // Event 'finish' akan terpanggil saat response selesai dikirim
  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;

    const color = status >= 500 ? '\x1b[31m' : // Merah untuk Error
                  status >= 400 ? '\x1b[33m' : // Kuning untuk Client Error
                  '\x1b[32m';                  // Hijau untuk Sukses
    const reset = '\x1b[0m';

    console.log(`\n${color}====================================================${reset}`);
    console.log(`${color}[${method}] ${originalUrl} - Status: ${status} - ${duration}ms${reset}`);
    
    // Log Request Body (Input dari frontend)
    if (Object.keys(req.body).length > 0) {
      console.log(`\x1b[36m[Request Body]:\x1b[0m`, req.body);
    }

    // Log Response Body (Output dari API)
    if (responseBody) {
      try {
        // Jika response berupa string JSON, kita parse agar rapi saat dicetak
        const parsedBody = typeof responseBody === 'string' ? JSON.parse(responseBody) : responseBody;
        
        // Sembunyikan token panjang di terminal agar log tidak penuh (opsional)
        if (parsedBody && parsedBody.data && parsedBody.data.token) {
           const logBody = JSON.parse(JSON.stringify(parsedBody));
           logBody.data.token = "[HIDDEN_TOKEN_FOR_LOGS]";
           console.log(`\x1b[35m[Response Body]:\x1b[0m`, logBody);
        } else {
           console.log(`\x1b[35m[Response Body]:\x1b[0m`, parsedBody);
        }

      } catch (e) {
        // Jika bukan JSON, cetak apa adanya
        console.log(`\x1b[35m[Response Body]:\x1b[0m`, responseBody);
      }
    }
    console.log(`${color}====================================================${reset}\n`);
  });

  next(); 
};
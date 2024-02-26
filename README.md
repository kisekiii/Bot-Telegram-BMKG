﻿# Bot-Telegram-BMKG
Bot Telegram Info Terbaru gempa dengan api BMKG


## API Reference

#### Get all items

```http
  GET /autogempa.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Jam`      | `string` | Menampilkan Waktu jam dan tanggal |
| `Tanggal`      | `string` | Menampilkan Tanggal yang terjadi |
| `Magnitude`      | `string` | Menampilkan Sekala Besar |
| `Wilayah`      | `string` | Menampilkan wilayah yang terjadi |
| `Dirasakan`      | `string` | Menampilkan wilayah yang di rasakan gempa |
| `Potensi`      | `string` | Menampilkan Potensi Bencana |

#### Get item

```http
  GET /DataMKG/TEWS/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Shakemap`      | `string` | Menampilkan Gambar Map |


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/kisekiii/Bot-Telegram-BMKG.git
```

Go to the project directory

```bash
  cd Bot-Telegram-BMKG
```

Start the server
```bash
  npm run bot
```


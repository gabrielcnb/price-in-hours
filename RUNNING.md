# Price Timer: running it

## Prerequisites (one-off)
1. Node.js: https://nodejs.org (LTS version)
2. EAS CLI: `npm install -g eas-cli expo-cli`
3. A free expo.dev account (takes about two minutes)

## Install dependencies
```bash
cd price-in-hours
npm install
```

## Log in to Expo
```bash
eas login
```

## Build for the iOS simulator (no Apple Developer account needed)
```bash
npm run build:ios
```
This builds on Expo's cloud machines and returns a `.app` file. Running it needs a Mac with Xcode.

## Run on a real iPhone (needs an Apple Developer account, $99/year)
1. Sign up at developer.apple.com
2. Register your iPhone's UDID with EAS:
   `eas device:create`
3. Build for the device:
   `npm run build:device`
4. EAS returns a link that installs straight onto the iPhone

## Free option: test the logic without a camera
The real camera does not work in Expo Go, because it uses native VisionCamera.
To test the logic, mock the OCR call in `camera.tsx` temporarily.

## App structure
- `app/index.tsx` — redirects to wage or camera
- `app/wage.tsx` — wage configuration screen
- `app/camera.tsx` — camera with the price overlay
- `utils/priceParser.ts` — detects €X.XX and $X.XX, converts to minutes
- `hooks/useWage.ts` — reads/writes the wage in AsyncStorage

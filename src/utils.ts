
export const delayPromise = (time: number) => <T>(data: T) => {
  return new Promise<T>((res) => {
    setTimeout(() => res(data), time);
  });
}

export function generateInt(min = 0, max = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function emulateServerResponse(data: any) {
  return Promise.resolve(data).then(delayPromise(generateInt(1000, 2000)));
}

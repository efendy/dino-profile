function timeAgo(date: Date | string | number): string {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    tahun: 31536000,
    bulan: 2592000,
    minggu: 604800,
    hari: 86400,
    jam: 3600,
    menit: 60,
    detik: 1,
  };

  for (const key in intervals) {
    const value = intervals[key];
    const result = Math.floor(diff / value);
    if (result > 0) {
      return `${result} ${key} yang lalu`;
    }
  }

  return "Baru saja";
}

export {
  timeAgo
}

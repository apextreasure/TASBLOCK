// Supplied CV 2026, physical pages 18–21. Image extraction recorded in docs.
const photos = (name: string, count: number) => Array.from({length: count}, (_,i) => `/images/tasblock/overseas-${name}-${i+1}.jpg`);
export const overseasCountries = [
  {name: 'Türkiye', locations: 'Trabzon · Beylikdüzü / Esenyurt, Istanbul', count: '3 rujukan projek'},
  {name: 'Russia', locations: 'Moscow', count: '1 rujukan projek'},
  {name: 'Iraq', locations: 'Baghdad', count: '1 rujukan projek'},
];
export const overseasProjects = [
  {id:'trabzon-house', title:'Rumah kampung, Trabzon', country:'Türkiye', images:photos('trabzon',1), facts:['Türkiye','300 m²','Februari 2013'], description:'CV 2026 merekodkan rumah tiga tingkat seluas 300 m² di Trabzon, siap dalam 24 hari. Bilangan tingkat dikemas kini mengikut CV terkini; profil terdahulu menyebut dua tingkat.'},
  {id:'istanbul-villa', title:'Vila di Beylikdüzü, Istanbul', country:'Türkiye', images:photos('istanbul-villa',3), facts:['Türkiye','Esenyurt, Istanbul','2011'], description:'CV 2026 menunjukkan vila dengan bukaan tingkap melengkung, pandangan luar dan dapur. Lokasi ini berasingan daripada rumah mampu milik Moscow.'},
  {id:'istanbul-office', title:'Pejabat tapak lima tingkat, Istanbul', country:'Türkiye', images:photos('istanbul-office',6), facts:['Türkiye','5 tingkat','2011'], description:'Pejabat tapak di Esenyurt, Istanbul. Galeri memperlihatkan bangunan siap, pemasangan dinding dan ruang dalaman, menurut CV pengeluar.'},
  {id:'moscow-house', title:'Rumah mampu milik, Moscow', country:'Russia', images:photos('moscow',1), facts:['Russia','70 m²','April 2013'], description:'CV 2026 secara jelas menamakan Moscow, Russia. Rumah mampu milik seluas 70 m² dilaporkan siap dalam tujuh hari bekerja. Foto dipadankan semula dengan rumah yang betul dalam CV.'},
  {id:'baghdad-warehouse', title:'Gudang Pepsi, Baghdad', country:'Iraq', images:photos('baghdad',4), facts:['Iraq','4,000 m²','Dinding 9 m','2011'], description:'Gudang Pepsi dengan pandangan luar, pemasangan struktur dan dua pandangan dalaman. Pengeluar melaporkan pemasangan seni bina dan struktur dalam 41 hari; tempoh ini khusus untuk skop kes tersebut.'},
];

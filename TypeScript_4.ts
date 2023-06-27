import os from 'os';
import si from 'systeminformation';

function displaySystemInfo() {
  console.log('Operating System:', os.platform());
  console.log('Architecture:', os.arch());
  console.log('Current User Name:', os.userInfo().username);

  si.cpu()
    .then((data) => {
      console.log('CPU Cores Models:', data.cores.map((core) => core.model));
      return si.cpuTemperature();
    })
    .then((data) => {
      console.log('CPU Temperature:', data.main);
      return si.graphics();
    })
    .then((data) => {
      console.log('Graphic Controllers:');
      data.controllers.forEach((controller) => {
        console.log('  Vendor:', controller.vendor);
        console.log('  Model:', controller.model);
      });
      return si.mem();
    })
    .then((data) => {
      const totalMemory = data.total / (1024 * 1024 * 1024); // Convert to GB
      const usedMemory = (data.used) / (1024 * 1024 * 1024); // Convert to GB
      const freeMemory = data.free / (1024 * 1024 * 1024); // Convert to GB

      console.log('Total Memory:', totalMemory.toFixed(2), 'GB');
      console.log('Used Memory:', usedMemory.toFixed(2), 'GB');
      console.log('Free Memory:', freeMemory.toFixed(2), 'GB');

      return si.battery();
    })
    .then((data) => {
      console.log('Battery:');
      console.log('  Charging:', data.ischarging);
      console.log('  Percent:', data.percent);
      console.log('  Remaining Time:', data.timeRemaining);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Отримуємо частоту з командного рядка
const frequencyInSeconds = Number(process.argv[2]);

// Перевіряємо, чи введений параметр є числом
if (isNaN(frequencyInSeconds)) {
  console.error('Frequency must be a number');
  process.exit(1);
}

// Виводимо системну інформацію з заданою частотою
setInterval(displaySystemInfo, frequencyInSeconds * 1000);

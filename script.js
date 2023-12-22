const names = ['Luis', 'Paula', 'Andrea', 'Elisa', 'Paulo', 'Iara', 'Marlene', 'Erick', 'Wallison'];
const videos = ['video.mp4', 'video2.mp4'];

// Pré-gerar as atribuições e senhas
const passwordMap = {
  'Luis': { assignedName: 'Andrea', password: 'abc123' },
  'Paula': { assignedName: 'Elisa', password: 'def456' },
  'Andrea': { assignedName: 'Paulo', password: 'ghi789' },
  'Elisa': { assignedName: 'Iara', password: 'jkl012' },
  'Paulo': { assignedName: 'Marlene', password: 'mno345' },
  'Iara': { assignedName: 'Erick', password: 'pqr678' },
  'Marlene': { assignedName: 'Wallison', password: 'stu901' },
  'Erick': { assignedName: 'Luis', password: 'vwx234' },
  'Wallison': { assignedName: 'Paula', password: 'yz567' }
};

function revealSecretFriend() {
  const passwordInput = document.getElementById('password');
  const alertDiv = document.getElementById('alert');
  const resultDiv = document.getElementById('result');
  const imageDiv = document.getElementById('image');

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === '') {
    alertDiv.innerText = 'Por favor, digite sua senha.';
    return;
  }

  const index = names.findIndex(name => passwordMap[name].password === enteredPassword);

  if (index !== -1) {
    const assignedName = passwordMap[names[index]].assignedName;
    resultDiv.innerText = `Você tirou: ${assignedName}`;

    // Escolhe um vídeo aleatório
    const video = videos[Math.floor(Math.random() * videos.length)];
    imageDiv.innerHTML = `<video autoplay loop playsinline><source src="${video}" type="video/mp4"></video>`;

    alertDiv.innerText = '';  // Limpa a mensagem de alerta
  } else {
    alertDiv.innerText = 'Senha inválida.';  // Exibe a mensagem de alerta no novo div
  }
}

function checkDuplicateAssignments() {
  const assignmentsCount = {};
  const duplicates = [];

  Object.values(passwordMap).forEach((assignment) => {
    const assignedName = assignment.assignedName;

    if (assignmentsCount[assignedName]) {
      assignmentsCount[assignedName]++;
      if (assignmentsCount[assignedName] > 1) {
        duplicates.push(assignedName);
      }
    } else {
      assignmentsCount[assignedName] = 1;
    }
  });

  return duplicates;
}

window.revealSecretFriend = revealSecretFriend;
window.checkDuplicateAssignments = checkDuplicateAssignments;

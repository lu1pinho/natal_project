const names = ['Luis', 'Paula', 'Andrea', 'Elisa', 'Paulo', 'Iara', 'Marlene', 'Erick', 'Wallison'];
const video = 'video.mp4';

// Pré-gerar as atribuições e senhas
const passwordMap = {
  'Luis': { assignedName: 'Iara', password: 'mno345' },
  'Paula': { assignedName: 'Elisa', password: 'jkl012' },
  'Andrea': { assignedName: 'Paulo', password: 'def456' },
  'Elisa': { assignedName: 'Marlene', password: 'pqr678' },
  'Paulo': { assignedName: 'Erick', password: 'stu901' },
  'Iara': { assignedName: 'Wallison', password: 'vwx234' },
  'Marlene': { assignedName: 'Andrea', password: 'yz567' },
  'Erick': { assignedName: 'Luis', password: 'abc123' },
  'Wallison': { assignedName: 'Paula', password: 'ghi789' }
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

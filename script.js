const names = ['Luis', 'Paula', 'Andrea', 'Elisa', 'Paulo', 'Iara', 'Marlene', 'Erick', 'Wallison'];
const video = './imagens/video.mp4';

// Pré-gerar as atribuições e senhas
const passwordMap = {
  'Luis': { assignedName: 'Elisa', password: 'abc123' },
  'Paula': { assignedName: 'Paulo', password: 'def456' },
  'Andrea': { assignedName: 'Iara', password: 'ghi789' },
  'Elisa': { assignedName: 'Marlene', password: 'jkl012' },
  'Paulo': { assignedName: 'Erick', password: 'mno345' },
  'Iara': { assignedName: 'Wallison', password: 'pqr678' },
  'Marlene': { assignedName: 'Luis', password: 'stu901' },
  'Erick': { assignedName: 'Paula', password: 'vwx234' },
  'Wallison': { assignedName: 'Andrea', password: 'yz567' }
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
    imageDiv.innerHTML = `<video autoplay loop><source src="${video}" type="video/mp4"></video>`;
    alertDiv.innerText = '';  // Limpa a mensagem de alerta
  } else {
    alertDiv.innerText = 'Senha inválida.';  // Exibe a mensagem de alerta no novo div
  }
}
function listAllPasswords() {
  console.log('Lista de Sorteio:');
  names.forEach((name) => {
    const assignedName = passwordMap[name].assignedName;
    console.log(`${name} tirou ${assignedName}. Senha: ${passwordMap[name].password}`);
  });
}

function generateRandomAssignments(names) {
  const shuffledNames = shuffleArray([...names]);
  const assignmentMap = {};

  for (let i = 0; i < names.length; i++) {
    let assignedName = shuffledNames[i % shuffledNames.length]; 

    while (assignedName === names[i]) {
      assignedName = shuffledNames[Math.floor(Math.random() * names.length)];
    }

    const password = generateRandomPassword();
    assignmentMap[names[i]] = {
      assignedName: assignedName,
      password: password
    };
  }

  return assignmentMap;
}

function generateRandomPassword() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

function listNamesAndPasswords() {
  console.log('Lista de Nomes e Senhas:');
  names.forEach((name) => {
    console.log(`Nome: ${name}, Senha: ${passwordMap[name].password}`);
  });
}

window.revealSecretFriend = revealSecretFriend;
window.listAllPasswords = listAllPasswords;
window.checkDuplicateAssignments = checkDuplicateAssignments;
window.listNamesAndPasswords = listNamesAndPasswords;

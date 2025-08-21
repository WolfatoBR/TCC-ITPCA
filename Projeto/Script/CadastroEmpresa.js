document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre seções
    const sections = document.querySelectorAll('.form-section');
    const steps = document.querySelectorAll('.step');
    
    document.getElementById('nextToSection2').addEventListener('click', function() {
        showSection(1);
        updateProgress(1);
    });
    
    document.getElementById('backToSection1').addEventListener('click', function() {
        showSection(0);
        updateProgress(0);
    });
    
    document.getElementById('nextToSection3').addEventListener('click', function() {
        showSection(2);
        updateProgress(2);
    });
    
    document.getElementById('backToSection2').addEventListener('click', function() {
        showSection(1);
        updateProgress(1);
    });
    
    function showSection(index) {
        sections.forEach(section => section.classList.remove('active'));
        sections[index].classList.add('active');
    }
    
    function updateProgress(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index < stepIndex) {
                step.classList.add('completed');
            } else if (index === stepIndex) {
                step.classList.add('active');
            }
        });
    }
    
    // Upload de documentos
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const documentPreview = document.getElementById('documentPreview');
    const ocrProcessing = document.getElementById('ocrProcessing');
    
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = '#3498db';
        uploadArea.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.style.borderColor = '#dee2e6';
        uploadArea.style.backgroundColor = '#f8f9fa';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = '#dee2e6';
        uploadArea.style.backgroundColor = '#f8f9fa';
        
        if (e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });
    
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length) {
            handleFileUpload(fileInput.files[0]);
        }
    });
    
    function handleFileUpload(file) {
        // Verificar tipo e tamanho do arquivo
        const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        
        if (!validTypes.includes(file.type)) {
            alert('Tipo de arquivo não suportado. Por favor, envie um PDF, JPG ou PNG.');
            return;
        }
        
        if (file.size > maxSize) {
            alert('Arquivo muito grande. O tamanho máximo permitido é 10MB.');
            return;
        }
        
        // Mostrar área de processamento
        uploadArea.style.display = 'none';
        ocrProcessing.style.display = 'block';
        
        // Simular processamento OCR/IA
        setTimeout(function() {
            ocrProcessing.style.display = 'none';
            documentPreview.style.display = 'block';
            document.getElementById('fileName').textContent = file.name;
            
            // Simular preenchimento automático de campos com dados extraídos
            document.getElementById('cnpj').value = '12.345.678/0001-90';
            document.getElementById('razaoSocial').value = 'Empresa Exemplo Ltda';
            document.getElementById('nomeFantasia').value = 'Exemplo Comércio';
        }, 3000);
    }
    
    // Gerenciamento de sócios
    document.getElementById('addSocio').addEventListener('click', function() {
        const sociosContainer = document.getElementById('sociosContainer');
        const newSocio = document.createElement('div');
        newSocio.className = 'socio-item';
        newSocio.innerHTML = `
            <div class="row">
                <div class="col-md-5">
                    <label class="form-label">Nome completo</label>
                    <input type="text" class="form-control" placeholder="Nome do sócio">
                </div>
                <div class="col-md-3">
                    <label class="form-label">CPF</label>
                    <input type="text" class="form-control" placeholder="000.000.000-00">
                </div>
                <div class="col-md-2">
                    <label class="form-label">Participação (%)</label>
                    <input type="number" class="form-control" placeholder="0" min="0" max="100" step="0.01">
                </div>
                <div class="col-md-2 d-flex align-items-end">
                    <button type="button" class="btn btn-outline-danger w-100 remove-socio">
                        <i class="bi bi-trash"></i> Remover
                    </button>
                </div>
            </div>
        `;
        
        sociosContainer.appendChild(newSocio);
        
        // Adicionar evento de remoção
        newSocio.querySelector('.remove-socio').addEventListener('click', function() {
            sociosContainer.removeChild(newSocio);
        });
    });
    
    // Adicionar eventos de remoção para o sócio inicial
    document.querySelectorAll('.remove-socio').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.socio-item').remove();
        });
    });
    
    // Validação do formulário
    document.getElementById('empresaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Empresa cadastrada com sucesso!');
        // Aqui você normalmente enviaria os dados para o servidor
    });
    
    // Máscaras para os campos
    document.getElementById('cnpj').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 14) value = value.slice(0, 14);
        
        if (value.length > 12) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        } else if (value.length > 8) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
        } else if (value.length > 5) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{3})/, '$1.$2');
        }
        e.target.value = value;
    });
    
    document.getElementById('cep').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        
        if (value.length > 5) {
            value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
        }
        e.target.value = value;
    });
    
    document.getElementById('telefone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/(\d{0,2})/, '($1');
        }
        e.target.value = value;
    });
});
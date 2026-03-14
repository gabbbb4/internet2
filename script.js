// Fonctions de Fenêtre
function closeWin(id) { document.getElementById(id).style.display = "none"; }
function minWin(id) { document.getElementById(id).classList.add('minimized'); }
function fullWin(id) { document.getElementById(id).classList.toggle('fullscreen'); }
function restWin(id) { 
    const w = document.getElementById(id);
    w.classList.remove('minimized');
    w.style.display = "flex";
}

// Navigation entre catégories et dossiers
function nav(catId, sidebarEl, customTitle) {
    // Masquer tous les groupes
    document.querySelectorAll('.cat-group').forEach(g => g.style.display = 'none');
    
    // Afficher le groupe ciblé
    const target = document.getElementById('cat-' + catId);
    if(target) target.style.display = 'block';

    // Gérer l'état actif dans la sidebar
    if(sidebarEl) {
        document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
        sidebarEl.classList.add('active');
    }
    
    // Mettre à jour le titre
    document.getElementById('finder-title').innerText = customTitle || catId.charAt(0).toUpperCase() + catId.slice(1);
}

// Fonctions d'ouverture de fichiers
// --- FONCTION POUR OUVRIR ET CHARGER LE TEXTE ---
window.openNote = function() {
    const noteTextarea = document.getElementById('note-textarea');
    const noteWindow = document.getElementById('note-window');

    // On va chercher le fichier dans le dossier txt
    fetch('txt/notes_bureau.txt')
        .then(response => {
            if (!response.ok) throw new Error("Le fichier notes.txt est introuvable");
            return response.text();
        })
        .then(data => {
            // On injecte le contenu du fichier dans la zone de texte
            noteTextarea.value = data;
            // On affiche la fenêtre
            noteWindow.style.display = "flex";
        })
        .catch(error => {
            console.error(error);
            noteTextarea.value = "Erreur : Impossible de charger le contenu de /txt/notes.txt. Vérifie que le fichier existe bien !";
            noteWindow.style.display = "flex";
        });
};function openImg(id) { document.getElementById(id).style.display = "flex"; }
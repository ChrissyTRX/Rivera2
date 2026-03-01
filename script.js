document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("cvForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // ===== COLORES =====
        const crema = [245, 239, 224];
        const corinto = [107, 15, 26];
        const negro = [0, 0, 0];

        // ===== FONDO CREMA =====
        doc.setFillColor(...crema);
        doc.rect(0, 0, 210, 297, "F");

        // ===== RECTÁNGULO CORINTO SUPERIOR =====
        doc.setFillColor(...corinto);
        doc.rect(0, 0, 210, 25, "F");

        // ===== OBTENER DATOS =====
        const nombre = document.getElementById("nombre").value;
        const profesion = document.getElementById("profesion").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;
        const perfil = document.getElementById("perfil").value;
        const institucion1 = document.getElementById("institucion1").value;
        const titulo1 = document.getElementById("titulo1").value;
        const anioEdu1 = document.getElementById("anioEdu1").value;
        const empresa1 = document.getElementById("empresa1").value;
        const puesto1 = document.getElementById("puesto1").value;
        const anioExp1 = document.getElementById("anioExp1").value;
        const descripcionExp1 = document.getElementById("descripcionExp1").value;
        const habilidades = document.getElementById("habilidades").value;
        const idiomas = document.getElementById("idiomas").value;

        let y = 40;

        // ===== NOMBRE =====
        doc.setTextColor(...negro);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text(nombre, 20, y);
        y += 10;

        // Profesión
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text(profesion, 20, y);
        y += 15;

        // Línea divisora
        doc.setDrawColor(...corinto);
        doc.setLineWidth(0.8);
        doc.line(20, y, 190, y);
        y += 10;

        // ===== CONTACTO =====
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Contacto", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(`Correo: ${correo}`, 20, y);
        y += 7;
        doc.text(`Teléfono: ${telefono}`, 20, y);
        y += 7;
        doc.text(`Ubicación: ${direccion}`, 20, y);
        y += 12;

        // ===== PERFIL =====
        doc.setFont("helvetica", "bold");
        doc.text("Perfil Profesional", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        const perfilTexto = doc.splitTextToSize(perfil, 170);
        doc.text(perfilTexto, 20, y);
        y += perfilTexto.length * 6 + 10;

        // ===== EDUCACIÓN =====
        doc.setFont("helvetica", "bold");
        doc.text("Educación", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.text(`${titulo1} - ${institucion1} (${anioEdu1})`, 20, y);
        y += 12;

        // ===== EXPERIENCIA =====
        doc.setFont("helvetica", "bold");
        doc.text("Experiencia Laboral", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.text(`${puesto1} - ${empresa1} (${anioExp1})`, 20, y);
        y += 7;

        const descripcionTexto = doc.splitTextToSize(descripcionExp1, 170);
        doc.text(descripcionTexto, 20, y);
        y += descripcionTexto.length * 6 + 10;

        // ===== HABILIDADES =====
        doc.setFont("helvetica", "bold");
        doc.text("Habilidades", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        const habilidadesTexto = doc.splitTextToSize(habilidades, 170);
        doc.text(habilidadesTexto, 20, y);
        y += habilidadesTexto.length * 6 + 10;

        // ===== IDIOMAS =====
        doc.setFont("helvetica", "bold");
        doc.text("Idiomas", 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.text(idiomas, 20, y);

        // ===== GUARDAR =====
        doc.save("Curriculum.pdf");
    });

});
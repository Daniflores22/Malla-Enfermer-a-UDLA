const malla = {
  "1° Semestre": ["BIOLOGÍA CELULAR", "INTROD. A MATEMÁTICA APLICADA", "SALUD PÚBLICA Y POLÍTICAS PÚBLICAS", "PROCESO DE ATENCIÓN EN ENFERMERÍA I"],
  "2° Semestre": ["FUNCIONES DE QUÍMICA Y BIOLOGÍA", "HISTOEMBRIOLOGÍA", "METOD. PARTICIPATIVA E INT. COMUN.", "PROCESO DE ATENCIÓN EN ENFERMERÍA II", "FUND. DE ENF. EN SALUD COMUNITARIA", "PSICOLOGÍA PARA EL EJERCICIO DE LA ENFERMERÍA"],
  "3° Semestre": ["BIOESTADÍSTICA", "FISIOLOGÍA GENERAL", "MICROBIOLOGÍA Y PARASITOLOGÍA", "TRABAJO INTERDISCIPLINARIO I", "EDUCACIÓN PARA LA SALUD", "EPIDEMIOLOGÍA"],
  "4° Semestre": ["FISIOPATOLOGÍA", "FARMACOLOGÍA", "TRABAJO INTERDISCIPLINARIO II"],
  "5° Semestre": ["SALUD Y MORBILIDAD ADULTO I", "PRÁCTICA INTEGRADA I", "GESTIÓN Y ADMINISTRACIÓN EN ENFERMERÍA I"],
  "6° Semestre": ["BIOÉTICA", "SALUD DEL ADULTO MAYOR", "SALUD Y MORBILIDAD ADULTO II", "PRÁCTICA INTEGRADA II", "GESTIÓN Y ADMINISTRACIÓN II"],
  "7° Semestre": ["SALUD MENTAL", "ENF. EN URGENCIAS", "METODOLOGÍA DE LA INVESTIGACIÓN", "SALUD DEL NIÑO Y ADOLESCENTE I", "PRÁCTICA INTEGRADA III"],
  "8° Semestre": ["CUIDADOS PALIATIVOS", "INFECCIONES Y ATENCIÓN", "SALUD NIÑO Y ADOLESCENTE II", "SALUD OCUPACIONAL", "SEMINARIO DE GRADO", "PRÁCTICA INTEGRADA IV"],
  "9° Semestre": ["SOPORTE VITAL AVANZADO", "INTERNADO I"],
  "10° Semestre": ["INTERNADO II", "PREPARACIÓN EXAMEN DE TÍTULO"]
};

const container = document.getElementById('malla-container');

Object.entries(malla).forEach(([semestre, cursos]) => {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('div');
  title.className = 'semestre-title';
  title.textContent = semestre;

  card.appendChild(title);

  cursos.forEach(curso => {
    const courseItem = document.createElement('div');
    courseItem.className = 'course';
    courseItem.textContent = curso;
    card.appendChild(courseItem);
  });

  container.appendChild(card);
});

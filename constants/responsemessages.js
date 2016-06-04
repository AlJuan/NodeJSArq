const USERNAME_REQ = 'username requerido';
const PASSWD_REQ = 'password requerido';
const INVALID_CRED = 'credenciales invalidas';
const REGISTER_SUCC = 'registrado con exito!';
const MATERIA_REQ_CREATE = 'faltan datos! materia requiere nombre y codigo';
const MATERIA_REQ_DELETE = 'faltan datos! materia requiere codigo';
const CUATRIMESTRE_REQ_CREATE = 'faltan datos! cuatrimestre requiere anio y semestre';
const CUATRIMESTRE_REQ_DELETE = 'faltan datos! cuatrimestre requiere anio y semestre';
const CURSO_REQ_CREATE = 'faltan datos! curso requiere horario, nroDeCurso, materiaId y cuatrimestreId';
const CURSO_REQ_DELETE = 'faltan datos! curso requiere id';
const CREATE_SUCC = 'Se persistio con exito!';
const DELETE_SUCC = 'Se elimino con exito!';
const INSCRI_SUCC = 'Se inscribio con exito!';
const DESINSCRI_SUCC = 'Se desinscribio con exito!';
const INSCRIP_MAX_SUPERADO = 'Este usuario esta inscripto en 5 materias, no puede inscribirse a mas!';
const INSCRIP_MATERIA_DUP = 'Ya se encuentra inscripto en esta materia, no puede inscribirse nuevamente!';
const MATERIA_NOT_FOUND = 'Materia inexistente!';
const CURSO_NOT_FOUND = 'Curso inexistente!';
const CURSO_NOT_FOUND_ACTUAL_CUAT = 'No existe un curso de esa materia para este cuatrimestre!';

module.exports = {
    USERNAME_REQ: USERNAME_REQ,
    PASSWD_REQ: PASSWD_REQ,
    INVALID_CRED: INVALID_CRED,
    REGISTER_SUCC: REGISTER_SUCC,
    MATERIA_REQ_CREATE: MATERIA_REQ_CREATE,
    CUATRIMESTRE_REQ_CREATE: CUATRIMESTRE_REQ_CREATE,
    CUATRIMESTRE_REQ_DELETE: CUATRIMESTRE_REQ_DELETE,
    MATERIA_REQ_DELETE: MATERIA_REQ_DELETE,
    CURSO_REQ_CREATE: CURSO_REQ_CREATE,
    CURSO_REQ_DELETE: CURSO_REQ_DELETE,
    CREATE_SUCC: CREATE_SUCC,
    DELETE_SUCC: DELETE_SUCC,
    INSCRI_SUCC: INSCRI_SUCC,
    INSCRIP_MAX_SUPERADO: INSCRIP_MAX_SUPERADO,
    DESINSCRI_SUCC: DESINSCRI_SUCC,
    INSCRIP_MATERIA_DUP: INSCRIP_MATERIA_DUP,
    MATERIA_NOT_FOUND: MATERIA_NOT_FOUND,
    CURSO_NOT_FOUND: CURSO_NOT_FOUND,
    CURSO_NOT_FOUND_ACTUAL_CUAT: CURSO_NOT_FOUND_ACTUAL_CUAT
};

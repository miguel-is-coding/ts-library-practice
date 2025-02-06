/**
 * Posibles casos:
 * - La primera línea del fichero no contiene las cabeceras que se esperan.
 * - Una línea con valores en los campos IGIC e IVA, se descarta.
 * - Una línea con valores en los campos CIF y NIF, se descarta.
 * - Un fichero con una línea válida, devuelve el mismo fichero con la línea introducida.
 * - Una línea que no tiene el valor del campo CIF formateado correctamente, se descarta.
 * - Una línea que no tiene el valor del campo NIF formateado correctamente, se descarta.
 * - Una línea cuyo cálculo del neto no corresponde con el bruto y el impuesto aplicado, se descarta.
 * - Una línea cuyo valores de precio (bruto o neto), no puedan ser formateados, se descarta
 */

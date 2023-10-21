const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ventas', (err, ventas) => {
            if (err) {
                res.json(err);
            }
            console.log(ventas);
            res.render('ventas', {
                data: ventas
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error en la conexión a la base de datos');
            return;
        }

        conn.query('INSERT INTO ventas SET ?', [data], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error al guardar el ventas');
            } else {
                console.log(result);
                res.redirect('/');
            }
        });
    });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ventas WHERE id = ?', [id], (err, ventas) => {
      res.render('ventas_edit', {
        data: ventas[0]
      });
    });
  });
};

controller.update = (req, res) =>{
  const {id} = req.params;
  const nuevasVentas = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE ventas set ? WHERE id = ?', [nuevasVentas, id], (err, rows) =>{
      res.redirect('/');
    })
  })
}

controller.delete = (req, res) => {
  const {id} = req.params;

    req.getConnection((err,conn)=>{
      conn.query('DELETE FROM ventas WHERE id = ?', [id], (err,rows) =>{
        res.redirect('/')
      });
    })
};

module.exports = controller;

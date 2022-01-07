export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Thiago ${codigo}`,
        email: `thiagohenriquedev${codigo}@gmail.com`
    })
}
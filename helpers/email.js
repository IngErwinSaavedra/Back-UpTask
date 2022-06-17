import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    
    const { email, nombre, token} = datos;

    const transport = await nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "bd0114949e5ed8",
          pass: "01ba9db3b1f9ff"
        }
      });

      //Información del Email

      const info = await transport.sendMail({
        from: '"UpGastos - Administrador de Gastos" <cuentas@UpGastos.com>',
        to: email,
        subject: "UpGastos - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpWaret",
        html: `<p>Hola: ${ nombre } Comprueba tu cuenta en UpGastos</p>
        <p>Tu cuenta esta casi lista, solo debes confirmar tu comprobar tu cuenta en el siguiente enlace: 
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
      });
}
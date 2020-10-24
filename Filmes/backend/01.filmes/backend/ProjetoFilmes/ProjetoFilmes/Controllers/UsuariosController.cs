using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjetoFilmes.Domains;
using ProjetoFilmes.Interfaces;
using ProjetoFilmes.Repositories;

namespace ProjetoFilmes.Controllers
{
    // Define o tipo de resposta da API
    [Produces("application/json")]

    // Define a rota da aplicação
    [Route("api/[controller]")]

    //Somente perfil Administrador tem acesso a este endpoint
    //[Authorize(Roles = "Administrador")]

    // Define que é um controlador de API
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        /// <summary>
        /// Cria um objeto que recebe os métodos estabelecidos na interface
        /// </summary>
        private IUsuarioRepository _usuarioRepository;

        /// <summary>
        /// Instancia este objeto com as implementações feitas no repositório
        /// </summary>
        public UsuariosController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Lista todos os usuarios
        /// </summary>
        /// <returns>Retorna uma lista de usuarios</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_usuarioRepository.Listar());
        }

        /// <summary>
        /// Busca um usuario através do ID
        /// </summary>
        /// <returns>Retorna um usuario buscado</returns>
        [Authorize]
        [HttpGet("BuscarPorId")]
        public IActionResult ListarPorId()
        {
            try
            {
                var usr = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(usr);

                if (usuarioBuscado != null)
                {
                    return Ok(usuarioBuscado);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

            return NotFound("Nenhum usuário foi encontrado.");
        }

        /// <summary>
        /// Cadastra um novo usuario
        /// </summary>
        /// <param name="novoUsuario"></param>
        /// <returns>Retorna um status code</returns>
        [HttpPost]
        public IActionResult Cadastrar(Usuario novoUsuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(novoUsuario);

                return StatusCode(201, novoUsuario);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Atualiza um usuario existente
        /// </summary>
        /// <param name="usuarioAtualizado">Objeto com as novas informações</param>
        /// <returns></returns>
        [Authorize]
        [HttpPut("Atualizar")]
        public IActionResult Atualizar(Usuario usuarioAtualizado)
        {
            try
            {
                var usr = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(usr);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Atualizar(usr, usuarioAtualizado);

                    return StatusCode(204);
                }

                return NotFound("Nenhum usuário encontrado para o ID informado.");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Deleta um usuario existente
        /// </summary>
        /// <param name="id">ID do usuario que será deletado</param>
        /// <returns>Retorna um status code</returns>
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Deletar(id);

                    return StatusCode(202, usuarioBuscado);
                }

                return NotFound("Nenhum usuário encontrado para o ID informado.");
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
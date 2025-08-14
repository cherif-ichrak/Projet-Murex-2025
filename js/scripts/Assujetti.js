document.addEventListener("DOMContentLoaded", function () {
  const Assujetti = document.getElementById("Assujetti");
  const formContainer = document.getElementById("formContainer");

  // Événement pour détecter les changements dans le menu déroulant
  Assujetti.addEventListener("change", function () {
    const selectedForm = Assujetti.value;

    // Effacer le contenu du conteneur du formulaire
    formContainer.innerHTML = "";

    // Ajouter le formulaire correspondant au choix
    if (selectedForm === "form1") {
      formContainer.innerHTML = `
        
      `;
    } else if (selectedForm === "form2") {
      formContainer.innerHTML = `
       <form>
                                                  <div class="row">
                                                    <div class="col">
                                                      <label
                                                        >N° Autorisation</label
                                                      >
                                                      <select
                                                        class="form-control"
                                                      >
                                                        <option>Tous</option>
                                                        <option>BL</option>
                                                        <option>Facture</option>
                                                      </select>
                                                    </div>
                                                    <div class="col">
                                                      <label> Date Début</label>
                                                      <input
                                                        class="form-control"
                                                        type="date"
                                                        placeholder=""
                                                        required="required"
                                                        value=""
                                                      />
                                                    </div>
                                                    <div class="col">
                                                      <label>Date fin</label>
                                                      <input
                                                        class="form-control"
                                                        type="date"
                                                        placeholder=""
                                                        required="required"
                                                        value=""
                                                      />
                                                    </div>

                                                    <div class="col">
                                                      <label> </label>
                                                      <br />
                                                      <input
                                                        data-dismiss="modal"
                                                        class="btn btn-xs btn-primary"
                                                        type="submit"
                                                        value="Ajouter"
                                                      />
                                                    </div>
                                                    <div
                                                      class="col-12 pt-3 pb-3"
                                                    >
                                                      <table
                                                        id="table_clients"
                                                        class="table table-striped table-bordered table-hover dataTables-example dataTable no-footer"
                                                        role="grid"
                                                        aria-describedby="table_clients_info"
                                                        style="width: 100%"
                                                      >
                                                        <thead>
                                                          <tr>
                                                            <th
                                                              class="sorting"
                                                              tabindex="0"
                                                              aria-controls="table_clients"
                                                              rowspan="1"
                                                              colspan="1"
                                                              aria-label="Intitulé : activer pour trier la colonne par ordre croissant"
                                                              style="width: 10%"
                                                            >
                                                              N° Autorisation
                                                            </th>
                                                            <th
                                                              class="sorting"
                                                              tabindex="0"
                                                              aria-controls="table_clients"
                                                              rowspan="1"
                                                              colspan="1"
                                                              aria-label="Intitulé : activer pour trier la colonne par ordre croissant"
                                                              style="width: 10%"
                                                            >
                                                              Date Début
                                                            </th>
                                                            <th
                                                              class="sorting"
                                                              tabindex="0"
                                                              aria-controls="table_clients"
                                                              rowspan="1"
                                                              colspan="1"
                                                              aria-label="Intitulé : activer pour trier la colonne par ordre croissant"
                                                              style="width: 10%"
                                                            >
                                                              Date Fin
                                                            </th>

                                                            <th
                                                              class="sorting"
                                                              tabindex="0"
                                                              aria-controls="table_clients"
                                                              rowspan="1"
                                                              colspan="1"
                                                              aria-label="Type : activer pour trier la colonne par ordre croissant"
                                                              style="width: 10%"
                                                            >
                                                              Actions
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td>70px0</td>
                                                            <td>70px0</td>
                                                            <td>12/02/2023</td>

                                                            <td
                                                              class="overflow-hidden"
                                                            >
                                                              <div
                                                                class="btn-group"
                                                              >
                                                                <button
                                                                  data-toggle="dropdown"
                                                                  class="btn btn-primary btn-xs dropdown-toggle btn-xs dropdown-toggle"
                                                                >
                                                                  Action
                                                                  <span
                                                                    class="caret"
                                                                  ></span>
                                                                </button>
                                                                <ul
                                                                  class="dropdown-menu"
                                                                >
                                                                  <li>
                                                                    <a href="#"
                                                                      >Modifier</a
                                                                    >
                                                                  </li>
                                                                  <li>
                                                                    <a href="#"
                                                                      >Supprimer</a
                                                                    >
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>70px0</td>
                                                            <td>70px0</td>
                                                            <td>12/02/2023</td>
                                                            <td
                                                              class="overflow-hidden"
                                                            >
                                                              <div
                                                                class="btn-group"
                                                              >
                                                                <button
                                                                  data-toggle="dropdown"
                                                                  class="btn btn-primary btn-xs dropdown-toggle btn-xs dropdown-toggle"
                                                                >
                                                                  Action
                                                                  <span
                                                                    class="caret"
                                                                  ></span>
                                                                </button>
                                                                <ul
                                                                  class="dropdown-menu"
                                                                >
                                                                  <li>
                                                                    <a href="#"
                                                                      >Modifier</a
                                                                    >
                                                                  </li>
                                                                  <li>
                                                                    <a href="#"
                                                                      >Supprimer</a
                                                                    >
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>70px0</td>
                                                            <td>70px0</td>
                                                            <td>12/02/2023</td>
                                                            <td
                                                              class="overflow-hidden"
                                                            >
                                                              <div
                                                                class="btn-group"
                                                              >
                                                                <button
                                                                  data-toggle="dropdown"
                                                                  class="btn btn-primary btn-xs dropdown-toggle btn-xs dropdown-toggle"
                                                                >
                                                                  Action
                                                                  <span
                                                                    class="caret"
                                                                  ></span>
                                                                </button>
                                                                <ul
                                                                  class="dropdown-menu"
                                                                >
                                                                  <li>
                                                                    <a href="#"
                                                                      >Modifier</a
                                                                    >
                                                                  </li>
                                                                  <li>
                                                                    <a href="#"
                                                                      >Supprimer</a
                                                                    >
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </div>
                                                </form>
      `;
    }
  });
});

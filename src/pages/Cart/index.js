import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProducTable, Total } from './styles';

import tenis from '../../assets/images/tenis.jpg';

export default function Cart() {
  return (
    <Container>
      <ProducTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD </th>
            <th>SUBTOTAL </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={tenis} alt="tênis" />
            </td>
            <td>
              <strong>tênis</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="numeber" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProducTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 129,90</strong>
        </Total>
      </footer>
    </Container>
  );
}

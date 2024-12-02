import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from '@mui/material';
import { Card, CardContent, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSubscription, fetchSubscriptions, selectAllSubscriptions, selectSubscriptionsStatus, selectSubscriptionsError } from '../../../redux/slices/subscriptionSlice';

const SubscriptionTable = ({ isDarkTheme }) => {
  const [view, setView] = useState('cards');
  const dispatch = useDispatch();
  const subscriptions = useSelector(selectAllSubscriptions);
  const status = useSelector(selectSubscriptionsStatus);
  const error = useSelector(selectSubscriptionsError);

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const toggleView = () => {
    setView(view === 'cards' ? 'table' : 'cards');
  };

  const handleDelete = (id) => {
    dispatch(deleteSubscription(id));
  };

  // Состояние загрузки
  if (status === 'loading') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Состояние ошибки
  if (status === 'failed') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Typography color="error">
          Ошибка загрузки: {error || 'Неизвестная ошибка'}
        </Typography>
      </Box>
    );
  }

  // Пустой список
  if (subscriptions.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Typography>У вас пока нет подписок</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '24px', backgroundColor: (theme) => theme.palette.background.default, minHeight: 'calc(100vh - 40px)', }}>
      <Button onClick={toggleView}>
        Переключить на {view === 'cards' ? 'таблицу' : 'карточки'}
      </Button>

      {view === 'cards' ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '10px' }}>
          {subscriptions.map((subscription) => (
            <Card key={subscription.id}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {subscription.name}
                </Typography>
                <Typography color="text.secondary">
                  Категория: {subscription.category}
                </Typography>
                <Typography color="text.secondary">
                  Подписчики: {subscription.followers.toLocaleString()}
                </Typography>
                <Button onClick={() => handleDelete(subscription.id)}>
                  Перестать отслеживать
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Категория</TableCell>
                <TableCell>Подписчики</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscriptions.map((subscription) => (
                <TableRow key={subscription.id} sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
                  <TableCell>{subscription.name}</TableCell>
                  <TableCell>{subscription.category}</TableCell>
                  <TableCell>{subscription.followers.toLocaleString()}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDelete(subscription.id)}>
                      Перестать отслеживать
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SubscriptionTable;